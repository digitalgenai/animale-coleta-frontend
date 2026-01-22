import { Image  } from "antd";
import { LuMapPin, LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router";

const Missao = ({ id, concorrente, produtos, titulo, criadaEm }) => {
    return (
        <Link
            to={`/admin/coletar/${id}`}
            className="text-black!"
        >
            <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="flex gap-4 items-start">
                    {
                        concorrente.foto ? (
                            <Image src={concorrente.foto} className="w-10! h-10! rounded-full object-cover" />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase">
                                {concorrente.nome.substring(0, 2)}
                            </div>
                        )
                    }
                    <div className="flex-1 flex justify-between h-10 items-center">
                        <div className="text-lg">{concorrente.nome}</div>
                        {/* <Tag color={concorrente.tipo == 'Online' ? '#EB9A00' : '#002855'} variant="outlined">Loja {concorrente.tipo}</Tag> */}
                    </div>
                </div>
                <div className="flex gap-4 items-center mt-4">
                    <div className="w-10 h-10 flex justify-center items-center text-lg">
                        <LuMapPin />
                    </div>
                    <div className="flex-1 leading-4">
                        <h6 className="text-azul font-bold">Endereço:</h6>
                        {concorrente.endereco}
                    </div>
                </div>
                <div className="flex gap-4 items-center mt-4">
                    <div className="w-10 h-10 flex justify-center items-center text-lg">
                        <LuShoppingCart />
                    </div>
                    <div className="flex-1 leading-4">
                        <h6 className="text-azul font-bold">Coleta:</h6>
                        {produtos.length} produtos
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Missao;