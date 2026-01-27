import { useMutation, useQuery } from "@tanstack/react-query"
import { AXIOS, QUERYCLIENT } from "../services";



export const useBuscarProduto = () => {
    return useQuery({
        queryKey: ['produtos'],
        queryFn: async (dados) => {
            const response = await AXIOS.get('/produtos', dados);
            return response.data;
        }
    });
}

export const useCriarProduto = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post('/produtos', dados, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['produtos']
            })
        }
    });
}

export const useImportarProduto = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const formData = new FormData();
            const file = dados.arquivo[0].originFileObj;
            formData.append("arquivo", file);
            const response = await AXIOS.post('/produtos/importar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({ queryKey: ['produtos'] });
        }
    });
};

export const useEditarProduto = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await AXIOS.post(`/produtos/${dados.id}`, dados, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['produtos']
            })
        }
    });
}

export const useDeletarProduto = () => {
    return useMutation({
        mutationFn: async (id) => {
            const response = await AXIOS.delete(`/produtos/${id}`);
            return response.data;
        },
        onSuccess: () => {
            QUERYCLIENT.invalidateQueries({
                queryKey: ['produtos']
            })
        }
    });
}
