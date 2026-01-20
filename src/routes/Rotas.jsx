import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/auth/Login";
import Recuperar from "../pages/auth/Recuperar";
import AdminLayout from "../layouts/AdminLayout";
import Painel from "../pages/admin/Painel";
import Usuarios from "../pages/admin/Usuarios";
import Concorrentes from "../pages/admin/Concorrentes";
import Produtos from "../pages/admin/Produtos";
import Missao from "../pages/admin/Missao";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Login />} />
                <Route path="/recuperar" element={<Recuperar />} /> */}
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Painel />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                    <Route path="/concorrentes" element={<Concorrentes />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/missoes" element={<Missao />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;