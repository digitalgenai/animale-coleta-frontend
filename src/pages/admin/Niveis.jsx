import { Button, Drawer, Form, Image, Input, Popconfirm, Select, Table, Tag, Upload } from "antd";
import { useContext, useState } from "react";
import { LuMap, LuMapPin, LuMessageCircle, LuPin, LuShoppingCart, LuUpload } from "react-icons/lu";
import { useBuscarNivel, useCriarNivel, useDeletarNivel, useEditarNivel } from "../../hooks/nivelHooks";
import { MainContext } from './../../contexts/MainContext';
import { useBuscarConcorrente } from './../../hooks/concorrenteHooks';
import { useBuscarProduto } from "../../hooks/produtoHooks";

const Nivel = () => {

    const [verCriar, setVerCriar] = useState(false);
    const [verEditar, setVerEditar] = useState(false);
    const [formCriar] = Form.useForm();
    const [formEditar] = Form.useForm();
    const { data: nivel, isFetching: nivelFetching } = useBuscarNivel();
    const { data: concorrentes } = useBuscarConcorrente();
    const { data: produtos } = useBuscarProduto();
    const { mutateAsync: criarNivel } = useCriarNivel();
    const { mutateAsync: editarNivel } = useEditarNivel();
    const { mutateAsync: deletarNivel } = useDeletarNivel();
    const { api } = useContext(MainContext);

    function criar(dados) {
        criarNivel(dados, {
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
        formCriar.resetFields();
        setVerCriar(false);
    }

    function editar(dados) {
        editarNivel(dados, {
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
        setVerEditar(false);
    }

    function deletar(id) {
        deletarNivel(id, {
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
    }

    return (
        <div>
            <div className="mb-6">
                <h2 className="font-bold text-xl text-azul mb-2">Níveis</h2>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="w-full"
                    onClick={() => setVerCriar(true)}
                >
                    Novo nível
                </Button>
            </div>

            <Table
                dataSource={nivel || []}
                rowKey={"id"}
                loading={nivelFetching}
                className="rounded-lg overflow-hidden shadow-xl"
            >
                <Table.Column
                    title="Nível"
                    render={(_, linha) => (
                        <div className="">
                            <div className="flex gap-4 items-start">
                                <div className="flex-1 flex justify-between h-10 items-center">
                                    <div className="text-lg">{linha.nome}</div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-4">
                                <Button
                                    type="text"
                                    onClick={() => {
                                        delete linha.foto;
                                        formEditar.setFieldsValue({ ...linha })
                                        setVerEditar(true);
                                    }}
                                >
                                    Editar
                                </Button>
                                <Popconfirm
                                    title="Aviso"
                                    description="Deseja apagar este item?"
                                    okText="Sim"
                                    cancelText="Não"
                                    onConfirm={() => {
                                        deletar(linha.id)
                                    }}
                                >
                                    <Button type="text">Deletar</Button>
                                </Popconfirm>
                            </div>
                        </div>
                    )}
                />
            </Table>

            <Drawer
                title="Criar"
                open={verCriar}
                onClose={() => setVerCriar(false)}
            >
                <Form
                    layout="vertical"
                    onFinish={criar}
                    form={formCriar}
                >
                    
                    <Form.Item
                        label="Nome"
                        name={'nome'}
                    >
                        <Input />
                    </Form.Item>
                    <div className="flex justify-end">
                        <Button
                            type="primary"
                            htmlType="submit"
                            shape="round"
                            className="w-25!"
                        >
                            Criar
                        </Button>
                    </div>
                </Form>
            </Drawer>

            <Drawer
                title="Editar"
                open={verEditar}
                onClose={() => setVerEditar(false)}
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
                    <Form.Item
                        label="Nome"
                        name={'nome'}
                    >
                        <Input />
                    </Form.Item>
                    <div className="flex justify-end">
                        <Button
                            type="primary"
                            htmlType="submit"
                            shape="round"
                            className="w-25!"
                        >
                            Editar
                        </Button>
                    </div>
                </Form>
            </Drawer>
        </div>
    );
}

export default Nivel;