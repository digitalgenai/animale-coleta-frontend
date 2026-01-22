import { Button, Drawer, Form, Image, Input, InputNumber, Space, Tag, Upload } from "antd";
import { LuArrowLeft, LuCamera, LuImage, LuLoader, LuMapPin, LuMessageCircle } from "react-icons/lu";
import { Link, useParams } from "react-router";
import Coleta from "./Coleta";
import { useContext, useState } from "react";
import { useBuscarUmaMissao, useEditarColeta } from "../hooks/missaoHooks";
import { MainContext } from "../contexts/MainContext";
import LeitorCodigoBarras from "./LeitorCodigoBarras";

const Coletar = () => {

    const [verColeta, setVerColeta] = useState(false);
    const [produto, setProduto] = useState(null);
    const [lerCodigo, setLerCodigo] = useState(false);

    const [formEditar] = Form.useForm();
    const { id } = useParams();
    const { data: missao, isFetched: missaoOk, refetch: missaoRefetch } = useBuscarUmaMissao(id);
    const { mutateAsync: editarColeta } = useEditarColeta();
    const { api } = useContext(MainContext);

    function editar(dados) {
        editarColeta(dados, {
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
                    <>
                        <div className="bg-white p-4 rounded-xl shadow-lg">
                            <div className="flex gap-4 items-start">
                                {
                                    missao.concorrente.foto ? (
                                        <Image src={missao.concorrente.foto} className="w-10! h-10! rounded-full object-cover" />
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
                        </div>
                        <div className="mt-4 flex flex-col gap-2">
                            {
                                missao.produtos.map(p => (
                                    <div
                                        key={p.id}
                                        onClick={() => {
                                            setProduto({ id: p.id, foto: p.foto });
                                            formEditar.setFieldsValue({
                                                id: p.id,
                                                precoConcorrente: p.precoConcorrente,
                                                codigo: p.codigo
                                            });
                                            setVerColeta(true);
                                        }}
                                    >
                                        <Coleta
                                            {...p.produto}
                                            foto={p.foto}
                                            precoConcorrente={p.precoConcorrente}
                                            status={p.status}
                                            updatedAt={p.updatedAt}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center">
                        <LuLoader className="animate-spin" size={36} />
                    </div>
                )
            }
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
                        label="Preço encontrado"
                        name="precoConcorrente"
                    >
                        <InputNumber prefix="R$" className="w-full!" />
                    </Form.Item>
                    <Form.Item
                        label="Código de barra"
                        name="codigo"
                    >
                        <Space.Compact className="w-full">
                            <Input />
                            <Button
                                size="large"
                                icon={<LuCamera />}
                                onClick={() => setLerCodigo(true)}
                            />
                        </Space.Compact>
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