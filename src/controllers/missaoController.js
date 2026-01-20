import { prisma } from "../services/index.js";

async function buscar() {
    try {
        return await prisma.missao.findMany({
            include:{
                concorrente: true,
                produtos: {
                    include:{
                        produto: true
                    }
                }
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
        const { titulo, concorrenteId, produtos } = dados;
        const request = await prisma.missao.create({
            data: {
                titulo,
                concorrenteId,
                produtos: {
                    create: produtos.map(produtoId => ({
                        produtoId
                    }))
                }
            }
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
        const request = await prisma.missao.update({
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
        const request = await prisma.missao.delete({
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