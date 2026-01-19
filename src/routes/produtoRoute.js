import express from "express";
import { buscar, criar, editar, deletar } from "../controllers/produtoController.js";
import multer from 'multer';
import path from "path";

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
    dados.preco = Number(dados.preco.replaceAll(",","."));
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get('host')}/uploads/produtos/${req.file.filename}`;
    }
    res.json(await criar(dados));
})

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
    dados.preco = Number(dados.preco.replaceAll(",","."));
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get('host')}/uploads/produtos/${req.file.filename}`;
    }
    res.json(await editar(dados));
})

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