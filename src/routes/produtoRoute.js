import express from "express";
import { buscar, criar, editar, deletar } from "../controllers/produtoController.js";
import multer from 'multer';
import path from "path";
import XLSX from "xlsx";
import fs from "fs";
import { prisma } from "../services/index.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/produtos/');
    },
    filename: function (req, file, cb) {
        const extensaoArquivo = path.extname(file.originalname);
        const nomeArquivo = `${Date.now()}${extensaoArquivo}`;
        cb(null, nomeArquivo);
    }
});
const upload = multer({ storage });
const router = express.Router();

router.get("/", async (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Retorna todos os registros'
    /* #swagger.responses[200] = {
            description: 'Retorna todos os registros',
            schema: [{
                id: 1,
                nome: "nome",
                codigo: "codigo", 
                preco: "preco",
                foto: "url da imagem"
            }]
    } */
    res.json(await buscar(req.body));
});

router.post("/", upload.single('foto'), async (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = "Cria um registro"
    /* #swagger.parameters['obj'] = {
            in: 'body',
            schema: {
            $nome: "nome",
            $codigo: "codigo", 
            $preco: "preco",
            $foto: "binario"
        }
    } */
    /* #swagger.responses[200] = {
            description: 'Registro criado',
            schema: {
                type: 'success',
                description: 'Registro criado com sucesso.',
            }
    } */
    let dados = req.body;
    dados.preco = Number(dados.preco.replaceAll(",", "."));
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get('host')}/uploads/produtos/${req.file.filename}`;
    }
    res.json(await criar(dados));
})

router.post("/importar", upload.single("arquivo"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                type: 'error',
                description: "Arquivo não enviado."
            });
        }

        const caminho = req.file.path;

        const workbook = XLSX.readFile(caminho);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const rows = XLSX.utils.sheet_to_json(worksheet, {
            defval: "",
            blankrows: false
        });

        // 🔽 normaliza cabeçalhos (Nome → nome, Preço → preco etc)
        const rowsNormalizadas = rows.map(row => {
            const novo = {};
            for (const key in row) {
                novo[key.toLowerCase().trim()] = row[key];
            }
            return novo;
        });

        const produtos = [];

        for (let i = 0; i < rowsNormalizadas.length; i++) {
            const linha = rowsNormalizadas[i];

            // ✅ valida vazio corretamente (0 é válido)
            if (!linha.nome || linha.preco === "" || linha.preco === null || linha.preco === undefined) {
                throw new Error(`Linha ${i + 2} inválida.`);
            }

            let preco = String(linha.preco).trim();
            preco = preco.replace(/\./g, "").replace(",", ".");
            preco = Number(preco);

            if (isNaN(preco)) {
                throw new Error(`Linha ${i + 2}: preço inválido (${linha.preco}).`);
            }

            produtos.push({
                nome: String(linha.nome).trim(),
                codigo: linha.codigo ? String(linha.codigo).trim() : null,
                preco: preco,
            });
        }

        await prisma.produto.createMany({
            data: produtos
        });

        fs.unlinkSync(caminho);

        res.json({
            type: "success",
            description: `${produtos.length} produtos importados com sucesso.`
        });

    } catch (error) {
        res.status(400).json({
            type: "error",
            description: error.message
        });
    }
});


router.post("/:id", upload.single('foto'), async (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = "Atualiza um registro"
    /* #swagger.parameters['obj'] = {
            in: 'body',
            schema: {
            $nome: "nome",
            $codigo: "codigo", 
            $preco: "preco",
            $foto: "binario"
        }
    } */
    /* #swagger.responses[200] = {
            description: 'Registro atualizado',
            schema: {
                type: 'success',
                description: 'Registro atualizado com sucesso.',
            }
    } */
    let dados = req.body;
    dados.id = Number(dados.id);
    dados.preco = Number(dados.preco.replaceAll(",", "."));
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get('host')}/uploads/produtos/${req.file.filename}`;
    }
    res.json(await editar(dados));
});

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = "Deleta um registro"
    /* #swagger.responses[200] = {
            description: 'Registro deletado',
            schema: {
                type: 'success',
                description: 'Registro deletado com sucesso.',
            }
    } */
    res.json(await deletar(req.params.id));
})

export default router;  