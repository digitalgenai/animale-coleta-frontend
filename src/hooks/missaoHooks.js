import { useMutation, useQuery } from "@tanstack/react-query"
import { AXIOS, QUERYCLIENT } from "../services";



export const useBuscarMissao = () => {
    return useQuery({
        queryKey: ['missao'],
        queryFn: async (dados) => {
            const response = await AXIOS.get('/missao', dados);
            return response.data;
        }
    });
}

export const useCriarMissao = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post('/missao', dados);
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['missao']
            })
        }
    });
}

export const useEditarMissao = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post(`/missao/${dados.id}`, dados);
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['missao']
            })
        }
    });
}

export const useDeletarMissao = () => {
    return useMutation({
        mutationFn: async (id) => {
            const response = await AXIOS.delete(`/missao/${id}`);
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['missao']
            })
        }
    });
}
