import { Button, Drawer, Form, Image, Input, InputNumber, Modal, Space, Tag, Upload } from "antd";
import { LuArrowLeft, LuCamera, LuImage, LuLoader, LuMapPin, LuMessageCircle } from "react-icons/lu";
import { Link, useParams } from "react-router";
import Coleta from "./Coleta";
import { useContext, useState } from "react";
import { useBuscarUmaMissao, useEditarColeta, useFinalizarMissao } from "../hooks/missaoHooks";
import { MainContext } from "../contexts/MainContext";
import LeitorCodigoBarras from "./LeitorCodigoBarras";
import img from "../assets/img-error.png";

const Coletar = () => {

    const [verColeta, setVerColeta] = useState(false);
    const [verModal, setVerModal] = useState(false);
    const [textModal, setTextModal] = useState("Ainda existem produtos sem coleta, deseja finalizar assim mesmo?");
    const [produto, setProduto] = useState(null);
    const [lerCodigo, setLerCodigo] = useState(false);

    const [formEditar] = Form.useForm();
    const { id } = useParams();
    const { api } = useContext(MainContext);
    const { data: missao, isFetched: missaoOk, refetch: missaoRefetch } = useBuscarUmaMissao(id);
    const { mutateAsync: editarColeta } = useEditarColeta();
    const { mutateAsync: finalizarMissao, isPending: finalizarMissaoPending } = useFinalizarMissao();
    const codigo = Form.useWatch('codigo',formEditar);

    function editar(dados) {
        editarColeta({ ...dados, status: 'concluído' }, {
            onSuccess: (response) => {
                api[response.type]({
                    description: response.description
                });
                missaoRefetch();
            },
            onError: (response) => {
                api[response.type]({
                    description: response.description
                });
            },
        });
        formEditar.resetFields();
        setVerColeta(false);
    }

    function finalizar() {
        setTextModal("Aguarde...");
        finalizarMissao({ id: missao.id, status: "concluído" }, {
            onSuccess: (response) => {
                api[response.type]({
                    description: response.description
                });
            },
            onError: (response) => {
                api[response.type]({
                    description: response.description
                });
            },
        });
        setVerModal(false);
    }

    function gerarCSV(missao) {
        const concorrente = missao.concorrente;
        const data = new Date(missao.updatedAt).toLocaleDateString("pt-BR");

        let csv = "";
        csv += `Concorrente: ${concorrente.nome}; Tipo: Loja ${concorrente.tipo}; Data: ${data}\n`;
        csv += "Código;Código Concorrente;Nome;Preço Base;Preço Concorrente;Preço Desconto;Observação\n";

        missao.produtos.forEach(produtoItem => {
            const codigo = produtoItem.produto.codigo ?? "";
            const codigoConcorrente = produtoItem.codigo ?? "";
            const nome = produtoItem.produto.nome ?? "";
            const precoBase = produtoItem.produto.preco ?? "";
            const precoConcorrente = produtoItem.precoConcorrente ?? "";
            const precoDesconto = produtoItem.precoConcorrentePromocao ?? "";
            const observacao = produtoItem.observacao ?? "";
            csv += `${codigo};${codigoConcorrente};${nome};${precoBase};${precoConcorrente};${precoDesconto};${observacao}\n`;
        });

        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${concorrente.nome.trim()}_Loja-${concorrente.tipo}_${data}.csv`;
        link.click();

        URL.revokeObjectURL(url);
    }

    return (
        <div className="p-4 bg-stone-100 h-dvh overflow-auto">
            <Link
                to={"/admin"}
                className="flex gap-4 items-center mb-6 text-lg font-bold text-azul!"
            >
                <LuArrowLeft size={24} /> Voltar
            </Link>
            {
                missaoOk ? (
                    <div className="lg:flex lg:gap-4 lg:items-start">
                        <div className="bg-white p-4 rounded-xl shadow-lg lg:w-100">
                            <div className="flex gap-4 items-start">
                                {
                                    missao.concorrente.foto ? (
                                        <Image
                                            src={missao.concorrente.foto}
                                            className="w-10! h-10! rounded-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = img
                                            }}
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase">
                                            {missao.concorrente.nome.substring(0, 2)}
                                        </div>
                                    )
                                }
                                <div className="flex-1 flex justify-between h-10 items-center">
                                    <div className="text-lg">{missao.concorrente.nome}</div>
                                    <Tag color={missao.concorrente.tipo == 'Online' ? '#EB9A00' : '#002855'} variant="outlined">Loja {missao.concorrente.tipo}</Tag>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center mt-4">
                                <div className="w-10 h-10 flex justify-center items-center text-lg">
                                    <LuMapPin />
                                </div>
                                <div className="flex-1 leading-4">
                                    <h6 className="text-azul font-bold">Endereço:</h6>
                                    {missao.concorrente.endereco}
                                </div>
                            </div>
                            <div className="flex gap-4 items-center mt-4">
                                <div className="w-10 h-10 flex justify-center items-center text-lg">
                                    <LuMessageCircle />
                                </div>
                                <div className="leading-4">
                                    <h6 className="text-azul font-bold">Observações:</h6>
                                    {missao.titulo ? missao.titulo : 'Nenhuma'}
                                </div>
                            </div>
                            <Button
                                className="mt-4 w-full"
                                type="primary"
                                size="large"
                                disabled={missao.status == "concluído"}
                                onClick={() => {
                                    if (missao.produtos.some(produto => produto.status == null)) {
                                        setVerModal(true);
                                    } else {
                                        finalizar();
                                    }
                                }}
                            >
                                Finalizar Missão
                            </Button>
                            {
                                missao.status == "concluído" && (
                                    <Button
                                        className="mt-4 w-full"
                                        type="primary"
                                        size="large"
                                        onClick={() => gerarCSV(missao)}
                                    >
                                        Exportar dados
                                    </Button>
                                )
                            }
                        </div>
                        <div className="mt-4 lg:mt-0 flex flex-col gap-2 lg:gap-4 lg:flex-1">
                            {
                                missao.produtos.map(p => (
                                    <div
                                        key={p.id}
                                        onClick={() => {
                                            if (missao.status == "concluído") {
                                                api.info({
                                                    description: "Esta missão já foi encerrada."
                                                })
                                                return
                                            }
                                            setProduto({ id: p.id, foto: p.foto });
                                            formEditar.setFieldsValue({
                                                id: p.id,
                                                precoConcorrente: p.precoConcorrente,
                                                precoConcorrentePromocao: p.precoConcorrentePromocao,
                                                observacao: p.observacao,
                                                codigo: p.codigo
                                            });
                                            setVerColeta(true);
                                        }}
                                    >
                                        <Coleta
                                            {...p.produto}
                                            foto={p.foto}
                                            precoConcorrente={p.precoConcorrente}
                                            precoConcorrentePromocao={p.precoConcorrentePromocao}
                                            status={p.status}
                                            updatedAt={p.updatedAt}
                                            createdAt={p.createdAt}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <LuLoader className="animate-spin" size={36} />
                    </div>
                )
            }

            <Modal
                title="Aviso:"
                open={verModal}
                onOk={finalizar}
                onClose={() => setVerModal(false)}
                onCancel={() => setVerModal(false)}
                confirmLoading={finalizarMissaoPending}
            >
                <p>{textModal}</p>
            </Modal>

            <Drawer
                open={verColeta}
                onClose={() => {
                    setVerColeta(false);
                    formEditar.resetFields();
                }}
            >
                <Form
                    layout="vertical"
                    onFinish={editar}
                    form={formEditar}
                >
                    <Form.Item
                        name={'id'}
                        hidden
                    >
                        <Input />
                    </Form.Item>
                    <div className="flex justify-center mb-6 relative">
                        {
                            produto && produto.foto ? (
                                <Image src={produto.foto} className="h-50!" />
                            ) : (
                                <div className="w-full h-50 bg-stone-200 rounded-xl flex justify-center items-center text-stone-400">
                                    <LuImage size={80} />
                                </div>
                            )
                        }
                    </div>
                    <Form.Item
                        name="foto"
                        valuePropName="file"
                        getValueFromEvent={(e) => e.file}
                        className="flex justify-center items-center"
                    >
                        <Upload
                            listType="picture"
                            beforeUpload={() => false}
                            accept="image/*"
                            maxCount={1}
                        >
                            <Button
                                type="primary"
                                size="large"
                                shape="round"
                                className="w-full!"
                            >
                                <LuCamera /> Capturar imagem
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label="Preço cheio"
                        name="precoConcorrente"
                    >
                        <InputNumber prefix="R$" className="w-full!" />
                    </Form.Item>
                    <Form.Item
                        label="Preço promoção"
                        name="precoConcorrentePromocao"
                    >
                        <InputNumber prefix="R$" className="w-full!" />
                    </Form.Item>
                    <Form.Item
                        label="Código de barra"
                        name="codigo"
                    >
                        <Input />
                    </Form.Item>
                    {codigo}
                    <Button
                        size="large"
                        // icon={<LuCamera />}
                        type="primary"
                        className="w-full! mb-4"
                        shape="round"
                        onClick={() => setLerCodigo(true)}
                    >Escanear barra</Button>
                    <Form.Item
                        label="Observação"
                        name="observacao"
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <div className="flex gap-4 *:flex-1">
                        <Button
                            type="primary"
                            size="large"
                            shape="round"
                            onClick={() => {
                                editar({ id: produto.id, status: "Produto Não encontrado" });
                            }}
                        >
                            Não encontrei
                        </Button>
                        <Button
                            type="primary"
                            size="large"
                            shape="round"
                            htmlType="submit"
                        >
                            Salvar
                        </Button>
                    </div>
                </Form>
            </Drawer>

            <Drawer
                open={lerCodigo}
                onClose={() => setLerCodigo(false)}
                title="Ler código de barras"
                size="70%"
                placement="bottom"
            >
                <LeitorCodigoBarras
                    onScan={(codigo) => {
                        formEditar.setFieldsValue({ codigo });
                        setLerCodigo(false);
                    }}
                    onClose={() => setLerCodigo(false)}
                />
            </Drawer>

        </div>
    );
}

export default Coletar;