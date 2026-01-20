import { Button, Drawer, Form, Image, Input, Popconfirm, Select, Table, Tag, Upload } from "antd";
import { useContext, useState } from "react";
import { LuUpload } from "react-icons/lu";
import { useBuscarMissao, useCriarMissao, useDeletarMissao, useEditarMissao } from "../../hooks/missaoHooks";
import { MainContext } from './../../contexts/MainContext';
import { useBuscarConcorrente } from './../../hooks/concorrenteHooks';
import { useBuscarProduto } from "../../hooks/produtoHooks";

const Missao = () => {

    const [verCriar, setVerCriar] = useState(false);
    const [verEditar, setVerEditar] = useState(false);
    const [formCriar] = Form.useForm();
    const [formEditar] = Form.useForm();
    const { data: missao, isFetching: missaoFetching } = useBuscarMissao();
    const { data: concorrentes } = useBuscarConcorrente();
    const { data: produtos } = useBuscarProduto();
    const { mutateAsync: criarMissao } = useCriarMissao();
    const { mutateAsync: editarMissao } = useEditarMissao();
    const { mutateAsync: deletarMissao } = useDeletarMissao();
    const { api } = useContext(MainContext);

    function criar(dados) {
        criarMissao(dados, {
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
        editarMissao(dados, {
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
        deletarMissao(id, {
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
                <h2 className="font-bold text-xl text-azul mb-2">Missões</h2>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="w-full"
                    onClick={() => setVerCriar(true)}
                >
                    Nova missão
                </Button>
            </div>

            <Table
                dataSource={missao || []}
                rowKey={"id"}
                loading={missaoFetching}
                className="rounded-lg overflow-hidden shadow-xl"
                showHeader={false}
            >
                <Table.Column
                    render={(_, linha) => (
                        <div className="">
                            <div className="flex gap-4 items-start">
                                {
                                    linha.foto ? (
                                        <Image src={linha.concorrente.foto} className="w-10! h-10! rounded-full object-cover" />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase">
                                            {linha.concorrente.nome.substring(0, 2)}
                                        </div>
                                    )
                                }
                                <div className="flex-1 text-stone-500">
                                    <div className="flex justify-between h-10 items-center">
                                        <div className="text-lg">{linha.concorrente.nome}</div>
                                        <Tag color={linha.concorrente.tipo == 'Online' ? '#EB9A00' : '#002855'} variant="outlined">{linha.concorrente.tipo}</Tag>
                                    </div>
                                    <div className="leading-4">
                                        <h6 className="text-azul font-bold">Endereço:</h6>
                                        {linha.concorrente.endereco}
                                    </div>
                                    <div className="leading-4">
                                        {linha.produtos.length} produtos
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
                        label="Título"
                        name={'titulo'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Concorrente"
                        name={'concorrenteId'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Select
                            placeholder={"Escolha o concorrente"}
                            options={(concorrentes || []).map(concorrente => {
                                return {
                                    label: concorrente.nome + ' ' + concorrente.tipo,
                                    value: concorrente.id
                                }
                            })}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Produtos da missão"
                        name="produtos"
                        rules={[{ required: true, message: "Selecione pelo menos um produto" }]}
                    >
                        <Select
                            mode="multiple"
                            placeholder="Selecione os produtos"
                            optionFilterProp="label"
                            showSearch
                            options={(produtos || []).map(p => {
                                return {
                                    value: p.id,
                                    label: p.nome
                                }
                            })}
                        />
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

export default Missao;