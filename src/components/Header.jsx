import { Image } from "antd";
import logo from "../assets/icon.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { LuLogOut } from "react-icons/lu";

const Header = () => {

    const { sair } = useContext(AuthContext);
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    return (
        <header className="bg-white p-4 lg:px-15 shadow-xl flex justify-between items-center">
            <img src={logo} alt="Animale" />
            <div className="flex gap-3 items-center">
                <div className="text-right">
                    <h6 className="text-lg leading-5 text-azul font-semibold">{usuario.nome}</h6>
                    <h6 className="text-xs leading-3">{usuario.email}</h6>
                </div>
                {
                    usuario?.foto ? (
                        <Image src={usuario.foto} className="w-10! h-10! rounded-full object-cover" />
                    ) : (
                        <div className="w-10 h-10 bg-azul rounded-full border-4 border-azul flex justify-center items-center text-white font-bold">
                            {usuario.nome.substring(0, 2)}
                        </div>
                    )
                }
                <LuLogOut size={24} onClick={sair} />
            </div>
        </header>
    );
}

export default Header;