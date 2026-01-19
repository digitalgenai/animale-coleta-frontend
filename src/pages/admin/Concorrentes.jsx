import { Button, Drawer, Form, Image, Input, Popconfirm, Select, Table, Tag, Upload } from "antd";
import { useContext, useState } from "react";
import { LuLoader, LuUpload } from "react-icons/lu";
import { useBuscarConcorrente, useCriarConcorrente, useDeletarConcorrente, useEditarConcorrente } from "../../hooks/concorrenteHooks";
import { MainContext } from './../../contexts/MainContext';

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
            <div className="mb-6">
                <h2 className="font-bold text-xl text-azul mb-2">Concorrentes</h2>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="w-full"
                    onClick={() => setVerCriar(true)}
                >
                    Novo concorrente
                </Button>
            </div>

            <Table
                dataSource={concorrentes || []}
                rowKey={"id"}
                loading={concorrentesFetching}
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
                                        <div className="w-10 h-10 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase">
                                            {linha.nome.substring(0, 2)}
                                        </div>
                                    )
                                }
                                <div className="flex-1 text-stone-500">
                                    <div className="flex justify-between h-10 items-center">
                                        <div className="text-lg">{linha.nome}</div>
                                        <Tag color={linha.tipo == 'Online' ? '#EB9A00' : '#002855'} variant="outlined">{linha.tipo}</Tag>
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
                                    label: 'Físico',
                                    value: 'Físico'
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
                                    label: 'Físico',
                                    value: 'Físico'
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