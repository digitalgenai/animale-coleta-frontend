import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/auth/Login";
import Recuperar from "../pages/auth/Recuperar";
import AdminLayout from "../layouts/AdminLayout";
import Painel from "../pages/admin/Painel";
import Usuarios from "../pages/admin/Usuarios";
import Concorrentes from "../pages/admin/Concorrentes";
import Produtos from "../pages/admin/Produtos";
import Missao from "../pages/admin/Missao";
import Coletar from "../components/Coletar";
import MissoesAbertas from "../components/MissoesAbertas";
import Coletas from "../components/Coletas";
import RotaProtegida from "./RotaProtegida";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/recuperar" element={<Recuperar />} /> */}
                <Route path="/admin" element={<RotaProtegida><AdminLayout /></RotaProtegida>}>
                    <Route index element={<Painel />} />
                    <Route path="/admin/usuarios" element={<Usuarios />} />
                    <Route path="/admin/concorrentes" element={<Concorrentes />} />
                    <Route path="/admin/produtos" element={<Produtos />} />
                    <Route path="/admin/missoes" element={<Missao />} />
                </Route>
                <Route path="/admin/coletar/:id" element={<Coletar />} />
                <Route path="/admin/missoes-pendentes" element={<MissoesAbertas />} />
                <Route path="/admin/coletas" element={<Coletas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;