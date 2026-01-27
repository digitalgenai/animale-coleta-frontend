import { Image, Tag  } from "antd";
import { LuMapPin, LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router";

const Missao = ({ id, concorrente, produtos, titulo, criadaEm }) => {
    return (
        <Link
            to={`/admin/coletar/${id}`}
            className="text-black!"
        >
            <div className="bg-white p-4 pt-6 rounded-xl shadow-lg">
                <div className="flex flex-col gap-4 items-center">
                    {
                        concorrente.foto ? (
                            <Image src={concorrente.foto} className="w-18! h-18! rounded-full object-cover" />
                        ) : (
                            <div className="w-18 h-18 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase">
                                {concorrente.nome.substring(0, 2)}
                            </div>
                        )
                    }
                    <div className="flex-1 flex flex-col  lg:justify-between h-10 items-center">
                        <div className="text-xl line-clamp-1">{concorrente.nome}</div>
                        <Tag color={concorrente.tipo == 'Online' ? '#EB9A00' : '#002855'} variant="outlined">Loja {concorrente.tipo}</Tag>
                    </div>
                </div>
                <div className="flex gap-4 items-center mt-4">
                    {/* <div className="w-10 h-10 flex justify-center items-center text-lg">
                        <LuMapPin />
                    </div> */}
                    <div className="flex-1 leading-4">
                        <h6 className="text-azul font-bold">Endereço:</h6>
                        <div className="line-clamp-1">{concorrente.endereco}</div>
                    </div>
                </div>
                <div className="flex gap-4 items-center mt-4">
                    {/* <div className="w-10 h-10 flex justify-center items-center text-lg">
                        <LuShoppingCart />
                    </div> */}
                    <div className="flex-1 leading-4">
                        <h6 className="text-azul font-bold">Coletar:</h6>
                        {produtos.length} produtos
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Missao;