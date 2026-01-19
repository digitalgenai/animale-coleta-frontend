import { prisma } from "../services/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function buscar() {
    try {
        return await prisma.usuario.findMany({
            omit: {
                senha: true
            }
        });
    } catch (error) {
        return {
            type: 'error',
            description: error.message
        }
    }
}

async function criar(dados) {
    try {
        dados = { 
            ...dados, 
            senha: await bcrypt.hash(dados.senha, 10)
        }
        const request = await prisma.usuario.create({
            data: dados
        });

        if (request) {
            return {
                type: 'success',
                description: 'Registro criado com sucesso'
            }
        }
    } catch (error) {
        return {
            type: 'error',
            description: error.message
        }
    }
}

async function editar(dados) {
    try {
        if(dados.senha){
            dados = { ...dados, senha: await bcrypt.hash(dados.senha, 10) }
        }
        const request = await prisma.usuario.update({
            data: dados,
            where: {
                id: dados.id
            }
        });

        if (request) {
            return {
                type: 'success',
                description: 'Registro atualizado com sucesso'
            }
        }
    } catch (error) {
        return {
            type: 'error',
            description: error.message
        }
    }
}

async function deletar(id) {
    try {
        const request = await prisma.usuario.delete({
            where: {
                id: Number(id)
            }
        });

        if (request) {
            return {
                type: 'success',
                description: 'Registro apagado com sucesso'
            }
        }
    } catch (error) {
        return {
            type: 'error',
            description: error.message
        }
    }
}

async function login(dados) {
    try {
        const usuario = await prisma.usuario.findFirst({
            where: {
                email: dados.email
            },
            include: {
                niveis: true
            }
        });
        if (!usuario) {
            return {
                tipo: "warning",
                mensagem: "Usuário não encontrado!"
            }
        }
        const senhaValida = await bcrypt.compare(dados.senha, usuario.senha);
        if (!senhaValida) {
            return {
                tipo: "warning",
                mensagem: "Usuário ou Senha inválida!"
            }
        }
        delete usuario.senha;
        const token = jwt.sign({ data: usuario.id }, process.env.SEGREDO, { expiresIn: '1h' });

        return {
            usuario,
            token
        }

    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
}

export {
    buscar,
    criar,
    editar,
    deletar,
    login
}