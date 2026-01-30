import { Button, Drawer, Form, Image, Input, Popconfirm, Select, Table, Tag, Upload } from "antd";
import { useContext, useState } from "react";
import { LuPencil, LuTrash, LuUpload } from "react-icons/lu";
import { useBuscarConcorrente, useCriarConcorrente, useDeletarConcorrente, useEditarConcorrente } from "../../hooks/concorrenteHooks";
import { MainContext } from './../../contexts/MainContext';
import img from "../../assets/img-error.png"

const Concorrentes = () => {

    const [verCriar, setVerCriar] = useState(false);
    const [verEditar, setVerEditar] = useState(false);
    const [formCriar] = Form.useForm();
    const [formEditar] = Form.useForm();
    const { data: concorrentes, isFetching: concorrentesFetching } = useBuscarConcorrente();
    const { mutateAsync: criarConcorrente } = useCriarConcorrente();
    const { mutateAsync: editarConcorrente } = useEditarConcorrente();
    const { mutateAsync: deletarConcorrente } = useDeletarConcorrente();
    const { api } = useContext(MainContext);

    function criar(dados) {
        criarConcorrente(dados, {
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
        editarConcorrente(dados, {
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
        deletarConcorrente(id, {
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
            <div className="mb-6 lg:flex lg:justify-between lg:items-center">
                <h2 className="font-bold text-xl text-azul mb-2">Concorrentes</h2>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="w-full lg:w-auto lg:px-8!"
                    onClick={() => setVerCriar(true)}
                >
                    Novo concorrente
                </Button>
            </div>

            <Table
                dataSource={concorrentes || []}
                rowKey={"id"}
                loading={concorrentesFetching}
                className="rounded-lg overflow-hidden shadow-xl lg:hidden"
            >
                <Table.Column
                    title="Concorrente"
                    render={(_, linha) => (
                        <div className="">
                            <div className="flex gap-4 items-start">

                                {
                                    linha.foto ? (
                                        <Image
                                            src={linha.foto}
                                            className="w-12! h-12! rounded-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = img
                                            }}
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase">
                                            {linha.nome.substring(0, 2)}
                                        </div>
                                    )
                                }
                                <div className="flex-1">
                                    <div className="flex justify-between h-10 items-center">
                                        <div className="text-lg">{linha.nome}</div>
                                        <Tag color={linha.tipo == 'Online' ? '#EB9A00' : '#002855'} variant="outlined">Loja {linha.tipo}</Tag>
                                    </div>
                                    <div className="leading-4">
                                        <h6 className="text-azul font-bold">Endereço:</h6>
                                        {linha.endereco}
                                    </div>
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

            <Table
                dataSource={concorrentes || []}
                rowKey={"id"}
                loading={concorrentesFetching}
                className="rounded-lg overflow-hidden shadow-xl hidden lg:block"
            >
                <Table.Column
                    className="w-8"
                    render={(_, linha) =>
                        linha.foto ? (
                            <div className="w-8 h-8">
                                <Image
                                    src={linha.foto}
                                    className="w-8! h-8! rounded-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = img
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase text-xs">
                                {linha.nome.substring(0, 2)}
                            </div>
                        )
                    }
                />
                <Table.Column
                    title="Nome"
                    render={(_, linha) => (
                        <div>
                            {linha.nome}
                        </div>
                    )}
                />
                <Table.Column
                    title="Endereço"
                    render={(_, linha) => (
                        <div>
                            {linha.endereco}
                        </div>
                    )}
                />
                <Table.Column
                    className="w-25"
                    title="Tipo"
                    render={(_, linha) => (
                        <div>
                            Loja {linha.tipo}
                        </div>
                    )}
                />
                <Table.Column
                    className="w-25"
                    title="Ações"
                    render={(_, linha) => (
                        <div className="flex justify-end gap-4">
                            <Button
                                icon={<LuPencil />}
                                type="primary"
                                onClick={() => {
                                    delete linha.foto;
                                    setVerEditar(true);
                                }}
                            />
                            <Popconfirm
                                title="Aviso"
                                description="Deseja apagar este item?"
                                okText="Sim"
                                cancelText="Não"
                                onConfirm={() => {
                                    deletar(linha.id)
                                }}
                            >
                                <Button
                                    icon={<LuTrash />}
                                    type="primary"
                                />
                            </Popconfirm>
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
                        label="Tipo de loja"
                        name={'tipo'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Select
                            placeholder={'Escolha o tipo de loja'}
                            options={[
                                {
                                    label: 'Física',
                                    value: 'Física'
                                },
                                {
                                    label: 'Online',
                                    value: 'Online'
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Endereço"
                        name={'endereco'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Input />
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
                        label="Tipo de loja"
                        name={'tipo'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Select
                            options={[
                                {
                                    label: 'Física',
                                    value: 'Física'
                                },
                                {
                                    label: 'Online',
                                    value: 'Online'
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Endereço"
                        name={'endereco'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Input />
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

export default Concorrentes;