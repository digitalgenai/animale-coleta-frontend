import { Button, Drawer, Form, Image, Input, InputNumber, Popconfirm, Table, Tag, Upload } from "antd";
import { useContext, useState } from "react";
import { LuImage, LuUpload } from "react-icons/lu";
import { useBuscarProduto, useCriarProduto, useDeletarProduto, useEditarProduto } from "../../hooks/produtoHooks";
import { MainContext } from './../../contexts/MainContext';

const Produtos = () => {

    const [verCriar, setVerCriar] = useState(false);
    const [verEditar, setVerEditar] = useState(false);
    const [formCriar] = Form.useForm();
    const [formEditar] = Form.useForm();
    const { data: produtos, isFetching: produtosFetching } = useBuscarProduto();
    const { mutateAsync: criarProduto } = useCriarProduto();
    const { mutateAsync: editarProduto } = useEditarProduto();
    const { mutateAsync: deletarProduto } = useDeletarProduto();
    const { api } = useContext(MainContext);

    function criar(dados) {
        criarProduto(dados, {
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
        editarProduto(dados, {
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
        deletarProduto(id, {
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
                <h2 className="font-bold text-xl text-azul mb-2">Produtos</h2>
                <div className="flex gap-4">
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        className="w-full"
                        onClick={() => setVerCriar(true)}
                    >
                        Importar produtos
                    </Button>
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        className="w-full"
                        onClick={() => setVerCriar(true)}
                    >
                        Novo produto
                    </Button>
                </div>
            </div>

            <Table
                dataSource={produtos || []}
                rowKey={"id"}
                loading={produtosFetching}
                className="rounded-lg overflow-hidden shadow-xl"
                showHeader={false}
            >
                <Table.Column
                    render={(_, linha) => (
                        <div className="">
                            <div className="flex gap-4 items-start">

                                {
                                    linha.foto ? (
                                        <Image src={linha.foto} className="w-10! h-10! rounded-full object-cover" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-lg bg-stone-200 font-bold flex justify-center items-center text-stone-600 uppercase">
                                            <LuImage />
                                        </div>
                                    )
                                }
                                <div className="flex-1 text-stone-500 font-semibold">
                                    <div className="text-lg text-azul">{linha.nome}</div>
                                    <div className="">Preço base: R$ {Number(linha.preco).toFixed(2)}</div>
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
                    encType="multipart/form-data"
                    form={formCriar}
                    defaultValue={{
                        tipo: 'Físico'
                    }}
                >
                    <Form.Item
                        label="Nome"
                        name={'nome'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Código de barras"
                        name={'codigo'}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Preço"
                        name={'preco'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <InputNumber prefix="R$" className="w-full!" />
                    </Form.Item>
                    <Form.Item
                        label="Foto"
                        name="foto"
                        valuePropName="file"
                        getValueFromEvent={(e) => e.file}
                    >
                        <Upload
                            listType="picture"
                            beforeUpload={() => false}
                            accept="image/*"
                            maxCount={1}
                        >
                            <Button
                                type="primary"
                            >
                                <LuUpload /> Procurar imagem
                            </Button>
                        </Upload>
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
                    encType="multipart/form-data"
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
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Código de barras"
                        name={'codigo'}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Preço"
                        name={'preco'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <InputNumber prefix="R$" className="w-full!" />
                    </Form.Item>
                    <Form.Item
                        label="Foto"
                        name="foto"
                        valuePropName="file"
                        getValueFromEvent={(e) => e.file}
                    >
                        <Upload
                            listType="picture"
                            beforeUpload={() => false}
                            accept="image/*"
                            maxCount={1}
                        >
                            <Button
                                type="primary"
                            >
                                <LuUpload /> Procurar imagem
                            </Button>
                        </Upload>
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

export default Produtos;