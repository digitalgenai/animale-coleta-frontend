import { Image } from "antd";
import logo from "../assets/icon.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { LuLogOut } from "react-icons/lu";

const Header = () => {

    const { sair } = useContext(AuthContext);
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));
    
    return (
        <header className="bg-white p-4 shadow-xl flex justify-between items-center">
            <img src={logo} alt="Animale" />
            <div className="flex gap-3 items-center">
                {
                    usuario?.foto ? (
                        <Image src={usuario.foto} className="w-10! h-10! rounded-full object-cover" />
                    ) : (
                        <div className="w-10 h-10 bg-azul rounded-full border-4 border-azul">
                            {usuario.nome.substring(0, 2)}
                        </div>
                    )
                }
                <LuLogOut size={24} onClick={sair}/>
            </div>
        </header>
    );
}

export default Header;