import { Button } from "antd";
import Missao from "../../components/Missao";
import Coleta from "../../components/Coleta";
import { useBuscarUlmimasMissao, useBuscarUltimasColetas } from "../../hooks/missaoHooks";
import { LuLoader } from "react-icons/lu";
import { useNavigate } from "react-router";

const Painel = () => {

    const { data: missoes, isFetched: missoesOk } = useBuscarUlmimasMissao();
    const { data: coletas, isFetched: coletasOk } = useBuscarUltimasColetas();
    const navigate = useNavigate();

    return (
        <div>
            <div className="mb-4 flex justify-between items-center">
                <h6 className="text-lg font-bold text-azul">Missões em aberto</h6>
                <div className="hidden lg:block">
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        className="w-37.5"
                        onClick={() => navigate("/admin/missoes-pendentes")}
                    >
                        Ver Todas
                    </Button>
                </div>
            </div>
            <div className="mt-4">
                {
                    missoesOk ?  (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {
                                missoes.length > 0 ? missoes.map(missao => (
                                    <Missao
                                        key={missao.id}
                                        { ...missao }
                                    />
                                )) : (
                                    <div className="flex justify-center">
                                        Nenhuma missão encontrada
                                    </div>
                                )
                            }
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            <LuLoader className="animate-spin" size={36} />
                        </div>
                    )
                }
            </div>
            <div className="flex justify-center mt-6 lg:hidden">
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="w-37.5"
                    onClick={() => navigate("/admin/missoes-pendentes")}
                >
                    Ver Todas
                </Button>
            </div>

            <h6 className="text-lg font-bold text-azul mb-4 mt-6">Últimas coletas</h6>
            <div className="flex flex-col gap-3">
                {
                    coletasOk ?  (
                        <div className="grid gap-2">
                            {
                                coletas.length > 0 ? coletas.map(coleta => (
                                    <Coleta
                                        key={coleta.id}
                                        { ...coleta.produto }
                                        precoConcorrente={coleta.precoConcorrente}
                                    />
                                )) : (
                                    <div className="flex justify-center">
                                        Nenhuma coleta encontrada
                                    </div>
                                )
                            }
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            <LuLoader className="animate-spin" size={36} />
                        </div>
                    )
                }
            </div>
            <div className="flex justify-center mt-6">
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="w-37.5"
                    onClick={() => navigate("/admin/coletas")}
                >
                    Ver Todas
                </Button>
            </div>
        </div>
    );
}

export default Painel;