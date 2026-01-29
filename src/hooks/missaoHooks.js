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

export const useBuscarUmaMissao = (id) => {
    return useQuery({
        queryKey: ['missao', id],
        queryFn: async () => {
            const response = await AXIOS.get(`/missao/${id}`);
            return response.data;
        },
        enabled: !!id
    });
}

export const useBuscarUlmimasMissao = () => {
    return useQuery({
        queryKey: ['missao'],
        queryFn: async (dados) => {
            const response = await AXIOS.get('/missao?qtd=4&status=pendente', dados);
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

export const useFinalizarMissao = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.put(`/missao/${dados.id}`, dados);
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

export const useBuscarColetas = () => {
    return useQuery({
        queryKey: ['coletas'],
        queryFn: async (dados) => {
            const response = await AXIOS.get('/missao/coletas', dados);
            return response.data;
        }
    });
}

export const useBuscarUltimasColetas = () => {
    return useQuery({
        queryKey: ['coletas'],
        queryFn: async (dados) => {
            const response = await AXIOS.get('/missao/coletas?qtd=3&ordem=desc&coleta=true', dados);
            return response.data;
        }
    });
}

export const useEditarColeta = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post(`/missao/coletas/${dados.id}`, dados, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['coletas']
            })
        }
    });
}
