import { Button, Drawer, Form, Image, Input, Popconfirm, Table, Tag, Upload } from "antd";
import { useContext, useState } from "react";
import { LuLoader, LuUpload } from "react-icons/lu";
import { useBuscarUsuario, useCriarUsuario, useDeletarUsuario, useEditarUsuario } from "../../hooks/usuarioHooks";
import { MainContext } from './../../contexts/MainContext';

const Usuarios = () => {

    const [verCriar, setVerCriar] = useState(false);
    const [verEditar, setVerEditar] = useState(false);
    const [formEditar] = Form.useForm();
    const { data: usuarios, isFetching: usuariosFetching } = useBuscarUsuario();
    const { mutateAsync: criarUsuario } = useCriarUsuario();
    const { mutateAsync: editarUsuario } = useEditarUsuario();
    const { mutateAsync: deletarUsuario } = useDeletarUsuario();
    const { api } = useContext(MainContext);

    function criar(dados) {
        criarUsuario(dados, {
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
        setVerCriar(false);
    }

    function editar(dados) {
        editarUsuario(dados, {
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
        deletarUsuario(id, {
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
                <h2 className="font-bold text-xl text-azul mb-2">Usuarios</h2>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="w-full"
                    onClick={() => setVerCriar(true)}
                >
                    Novo usuário
                </Button>
            </div>

            <Table
                dataSource={usuarios || []}
                rowKey={"id"}
                loading={usuariosFetching}
                className="rounded-lg overflow-hidden shadow-xl"
                // showHeader={false}
            >
                <Table.Column
                    title="Usuário"
                    render={(_, linha) => (
                        <div className="">
                            <div className="flex gap-4 items-center">
                                {/* <Tag color={'#002855'}>#{linha.id}</Tag> */}
                                {
                                    linha.foto ? (
                                        <Image src={linha.foto} className="w-12! h-12! rounded-full object-cover" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase">
                                            {linha.nome.substring(0, 2)}
                                        </div>
                                    )
                                }
                                <div className="leading-4">
                                    <div className="text-lg leading-5">{linha.nome}</div>
                                    <div>{linha.email}</div>
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
                >
                    <Form.Item
                        label="Nome"
                        name={'nome'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name={'email'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Senha"
                        name={'senha'}
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
                        label="Email"
                        name={'email'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Senha"
                        name={'senha'}
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
                                <LuLoader /> Procurar imagem
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

export default Usuarios;