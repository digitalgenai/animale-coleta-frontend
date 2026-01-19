import { useMutation, useQuery } from "@tanstack/react-query"
import { AXIOS, QUERYCLIENT } from "../services";



export const useBuscarConcorrente = () => {
    return useQuery({
        queryKey: ['concorrentes'],
        queryFn: async (dados) => {
            const response = await AXIOS.get('/concorrentes', dados);
            return response.data;
        }
    });
}

export const useCriarConcorrente = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post('/concorrentes', dados, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['concorrentes']
            })
        }
    });
}

export const useEditarConcorrente = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post(`/concorrentes/${dados.id}`, dados, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['concorrentes']
            })
        }
    });
}

export const useDeletarConcorrente = () => {
    return useMutation({
        mutationFn: async (id) => {
            const response = await AXIOS.delete(`/concorrentes/${id}`);
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['concorrentes']
            })
        }
    });
}
