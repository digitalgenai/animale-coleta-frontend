import { LuHouse, LuListTodo, LuShoppingCart, LuStore, LuUser } from "react-icons/lu";
import { NavLink } from "react-router";

const Menu = () => {
    return (
        <nav className="p-4 lg:hidden">
            <ul className="bg-azul rounded-[50px] flex justify-between items-center px-6 shadow-lg shadow-azul/50">
                <li className="flex-1 h-15">
                    <NavLink 
                        to={'/admin'}
                        className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                        end
                    >
                        <LuHouse size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150">Home</span>
                    </NavLink>
                </li>
                <li className="flex-1 h-15">
                    <NavLink 
                        to={'/admin/missoes'}
                        className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                        end
                    >
                        <LuListTodo size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150">Missões</span>
                    </NavLink>
                </li>
                <li className="flex-1 h-15">
                    <NavLink 
                        to={'/admin/produtos'}
                        className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                        end
                    >
                        <LuShoppingCart size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150">Produtos</span>
                    </NavLink>
                </li>
                <li className="flex-1 h-15">
                    <NavLink 
                        to={'/admin/concorrentes'}
                        className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                        end
                    >
                        <LuStore size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150">Concorrentes</span>
                    </NavLink>
                </li>
                <li className="flex-1 h-15">
                    <NavLink 
                        to={'/admin/usuarios'}
                        className={'h-15 block group text-white! [&.active]:text-amarelo! relative'}
                        end
                    >
                        <LuUser size={24} className="absolute bottom-1/2 left-1/2 -translate-1/2 translate-y-1/2 group-[&.active]:translate-y-0 duration-150" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 duration-150">Usuários</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;