import express from "express";
import { buscar, criar, editar, deletar } from "../controllers/concorrenteController.js";
import multer from 'multer';
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/concorrentes/');
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
    // #swagger.tags = ['Concorrentes']
    // #swagger.description = 'Retorna todos os registros'
    /* #swagger.responses[200] = {
            description: 'Retorna todos os registros',
            schema: [{
                id: 1,
                nome: "nome",
                tipo: "tipo", 
                endereco: "endereco",
                foto: "url da imagem"
            }]
    } */
    res.json(await buscar(req.body));
});

router.post("/", upload.single('foto'), async (req, res) => {
    // #swagger.tags = ['Concorrentes']
    // #swagger.description = "Cria um registro"
    /* #swagger.parameters['obj'] = {
            in: 'body',
            schema: {
            $nome: "nome",
            $tipo: "tipo", 
            $endereco: "endereco",
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
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get('host')}/uploads/concorrentes/${req.file.filename}`;
    }
    res.json(await criar(dados));
})

router.post("/:id", upload.single('foto'), async (req, res) => {
    // #swagger.tags = ['Concorrentes']
    // #swagger.description = "Atualiza um registro"
    /* #swagger.parameters['obj'] = {
            in: 'body',
            schema: {
            $nome: "nome",
            $tipo: "tipo", 
            $endereco: "endereco",
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
    if (req.file) {
        dados.foto = `${req.protocol}://${req.get('host')}/uploads/concorrentes/${req.file.filename}`;
    }
    res.json(await editar(dados));
})

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Concorrentes']
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