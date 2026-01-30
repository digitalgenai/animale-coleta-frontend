import { Image } from "antd";
import logo from "../assets/icon.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { LuHouse, LuListTodo, LuLogOut, LuShoppingCart, LuStore, LuUser } from "react-icons/lu";
import { NavLink } from "react-router";
import img from "../assets/img-error.png"

const Header = () => {

    const { sair } = useContext(AuthContext);
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    return (
        <header className="bg-white p-4 lg:px-7 shadow-xl flex justify-between items-center relative">
            <div className="flex items-center gap-4">
                {/* <div className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-slate-100 duration-200 cursor-pointer">
                    <LuMenu size={20} className="text-azul" />
                </div> */}
                <img src={logo} alt="Animale" />
            </div>
            {/* <div className="w-full h-dvh bg-black/80 fixed top-0 left-0 z-10"></div> */}
            <nav className="hidden lg:block w-25 h-[calc(100dvh-82px)] bg-azul pt-6 fixed left-0 bottom-0 z-10">
                <ul>
                    <li className="flex-1 h-15 hover:bg-white/5 duration-200">
                        <NavLink
                            to={'/admin'}
                            className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                            end
                        >
                            <LuHouse size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150 text-xs">Home</span>
                        </NavLink>
                    </li>
                    <li className="flex-1 h-15 hover:bg-white/5 duration-200">
                        <NavLink
                            to={'/admin/missoes'}
                            className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                            end
                        >
                            <LuListTodo size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150 text-xs">Missões</span>
                        </NavLink>
                    </li>
                    <li className="flex-1 h-15 hover:bg-white/5 duration-200">
                        <NavLink
                            to={'/admin/produtos'}
                            className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                            end
                        >
                            <LuShoppingCart size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150 text-xs">Produtos</span>
                        </NavLink>
                    </li>
                    <li className="flex-1 h-15 hover:bg-white/5 duration-200">
                        <NavLink
                            to={'/admin/concorrentes'}
                            className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                            end
                        >
                            <LuStore size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150 text-xs">Concorrentes</span>
                        </NavLink>
                    </li>
                    <li className="flex-1 h-15 hover:bg-white/5 duration-200">
                        <NavLink
                            to={'/admin/usuarios'}
                            className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                            end
                        >
                            <LuUser size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150 text-xs">Usuários</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-3 items-center">
                <div className="text-right">
                    <h6 className="text-lg leading-5 text-azul font-semibold">{usuario.nome}</h6>
                    <h6 className="text-xs leading-3">{usuario.email}</h6>
                </div>
                {
                    usuario?.foto ? (
                        <Image
                            src={usuario.foto}
                            className="w-10! h-10! rounded-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = img
                            }}
                        />
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