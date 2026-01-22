import { LuArrowLeft, LuMapPin, LuMessageCircle, LuShoppingCart } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { useBuscarColetas } from "../hooks/missaoHooks";
import { Button, Image, Table, Tag } from "antd";
import Coleta from "./Coleta";

const Coletas = () => {
    const { data: coletas, isFetching: coletasOk } = useBuscarColetas();
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
                dataSource={coletas || []}
                rowKey={"id"}
                loading={coletasOk}
                className="rounded-lg overflow-hidden shadow-xl"
            >
                <Table.Column
                    title="Coletas"
                    render={(_, linha) => (
                        <Coleta
                            key={linha.id}
                            {...linha.produto}
                            foto={linha.foto}
                            precoConcorrente={linha.precoConcorrente}
                            status={linha.status}
                            updatedAt={linha.updatedAt}
                            shadow={false}
                        />
                    )}
                />
            </Table>
        </div>
    );
}

export default Coletas;