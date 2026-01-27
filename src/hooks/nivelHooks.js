import { useMutation, useQuery } from "@tanstack/react-query"
import { AXIOS, QUERYCLIENT } from "../services";

export const useBuscarNivel = () => {
    return useQuery({
        queryKey: ['nivel'],
        queryFn: async (dados) => {
            const response = await AXIOS.get('/niveis', dados);
            return response.data;
        }
    });
}

export const useBuscarUmaNivel = (id) => {
    return useQuery({
        queryKey: ['nivel', id],
        queryFn: async () => {
            const response = await AXIOS.get(`/niveis/${id}`);
            return response.data;
        },
        enabled: !!id
    });
}


export const useCriarNivel = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post('/niveis', dados);
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['nivel']
            })
        }
    });
}

export const useEditarNivel = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post(`/niveis/${dados.id}`, dados);
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['nivel']
            })
        }
    });
}

export const useDeletarNivel = () => {
    return useMutation({
        mutationFn: async (id) => {
            const response = await AXIOS.delete(`/niveis/${id}`);
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['nivel']
            })
        }
    });
}
