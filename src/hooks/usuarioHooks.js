import { useMutation, useQuery } from "@tanstack/react-query"
import { AXIOS, QUERYCLIENT } from "../services";



export const useBuscarUsuario = () => {
    return useQuery({
        queryKey: ['usuarios'],
        queryFn: async (dados) => {
            const response = await AXIOS.get('/usuarios', dados);
            return response.data;
        }
    });
}

export const useCriarUsuario = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post('/usuarios', dados, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['usuarios']
            })
        }
    });
}

export const useEditarUsuario = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post(`/usuarios/${dados.id}`, dados, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['usuarios']
            })
        }
    });
}

export const useDeletarUsuario = () => {
    return useMutation({
        mutationFn: async (id) => {
            const response = await AXIOS.delete(`/usuarios/${id}`);
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['usuarios']
            })
        }
    });
}

export const useLogin = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post('/login', dados);
            return response.data;
        }
    });
}

export const useRecuperar = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post('/recuperar', dados);
            return response.data;
        }
    });
}