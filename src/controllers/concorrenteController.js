import { prisma } from "../services/index.js";

async function buscar() {
    try {
        return await prisma.concorrente.findMany();
    } catch (error) {
        return {
            type: 'error',
            description: error.message
        }
    }
}

async function criar(dados) {
    try {
        const request = await prisma.concorrente.create({
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
        const request = await prisma.concorrente.update({
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
        const request = await prisma.concorrente.delete({
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

export {
    buscar,
    criar,
    editar,
    deletar
}