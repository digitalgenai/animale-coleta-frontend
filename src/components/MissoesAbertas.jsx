import { LuArrowLeft, LuMapPin, LuMessageCircle, LuShoppingCart } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { useBuscarMissao } from "../hooks/missaoHooks";
import { Button, Image, Table, Tag } from "antd";

const MissoesAbertas = () => {
    const { data: missoes, isFetching: missoesOk } = useBuscarMissao();
    const navigate = useNavigate();
    return (
        <div className="p-4 bg-stone-100 h-dvh overflow-auto">
            <Link
                to={"/admin"}
                className="flex gap-4 items-center mb-6 text-lg font-bold text-azul!"
            >
                <LuArrowLeft size={24} /> Voltar
            </Link>
            <Table
                dataSource={missoes || []}
                rowKey={"id"}
                loading={missoesOk}
                className="rounded-lg overflow-hidden shadow-xl"
            >
                <Table.Column
                    title="Missões"
                    render={(_, linha) => (
                        <div className="">
                            <div className="flex gap-4 items-start">
                                {
                                    linha.concorrente.foto ? (
                                        <Image src={linha.concorrente.foto} className="w-12! h-12! rounded-full object-cover" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase">
                                            {linha.concorrente.nome.substring(0, 2)}
                                        </div>
                                    )
                                }
                                <div className="flex-1 flex justify-between h-10 items-center">
                                    <div className="text-lg">{linha.concorrente.nome}</div>
                                    <Tag color={linha.concorrente.tipo == 'Online' ? '#EB9A00' : '#002855'} variant="outlined">Loja {linha.concorrente.tipo}</Tag>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center mt-4">
                                <div className="w-10 h-10 flex justify-center items-center text-lg">
                                    <LuMapPin />
                                </div>
                                <div className="leading-4">
                                    <h6 className="text-azul font-bold">Endereço:</h6>
                                    {linha.concorrente.endereco}
                                </div>
                            </div>
                            <div className="flex gap-4 items-center mt-4">
                                <div className="w-10 h-10 flex justify-center items-center text-lg">
                                    <LuShoppingCart />
                                </div>
                                <div className="leading-4">
                                    <h6 className="text-azul font-bold">Coleta:</h6>
                                    {linha.produtos.length} produtos
                                </div>
                            </div>
                            <div className="flex gap-4 items-center mt-4">
                                <div className="w-10 h-10 flex justify-center items-center text-lg">
                                    <LuMessageCircle />
                                </div>
                                <div className="leading-4">
                                    <h6 className="text-azul font-bold">Observações:</h6>
                                    {linha.titulo ? linha.titulo : 'Nenhuma'}
                                </div>
                            </div>
                            <div className="flex justify-end gap-4">
                                <Button
                                    type="primary"
                                    shape="round"
                                    size="large"
                                    onClick={() => {
                                        navigate(`/admin/coletar/${linha.id}`)
                                    }}
                                >
                                    Realizar coleta
                                </Button>
                            </div>
                        </div>
                    )}
                />
            </Table>
        </div>
    );
}

export default MissoesAbertas;