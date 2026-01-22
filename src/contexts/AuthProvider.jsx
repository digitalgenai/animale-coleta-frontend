/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { MainContext } from "./MainContext";
import { AXIOS } from "../services";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    let usuarioSession = JSON.parse(sessionStorage.getItem("usuario")) || null;
    let tokenSession = sessionStorage.getItem("token") || "";

    const [token, setToken] = useState(tokenSession);
    const [user, setUser] = useState(usuarioSession);

    const { api } = useContext(MainContext);

    const entrar = (token, usuario) => {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("usuario", JSON.stringify(usuario));
        setToken(token);
        setUser(usuario);
    };

    const sair = useCallback(() => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("usuario");
        setToken('');
        setUser(null);
        window.location.href = "/"
    }, []);

    const getInfo = useCallback((id) => {
        AXIOS.get(`/usuarios/me/${id}`)
            .then(response => {
                setUser(response.data);
            }).catch(error => {
                if (error.response.status == 401 || error.response.status == 500) {
                    sair();
                }
            })
    }, [sair]);

    AXIOS.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        api.info({
            description: "Acesso expirado!",
            onClose: () => {
                sair();
            }
        })
    });

    useEffect(() => {
        AXIOS.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
        AXIOS.defaults.headers.common['Content-Type'] = 'application/json';
    }, [getInfo, token, user]);

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser, entrar, sair, getInfo }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;