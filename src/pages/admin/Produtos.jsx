import { Button, Drawer, Form, Image, Input, InputNumber, Popconfirm, Table, Tag, Upload } from "antd";
import { useContext, useState } from "react";
import { LuImage, LuPencil, LuTrash, LuUpload } from "react-icons/lu";
import { useBuscarProduto, useCriarProduto, useDeletarProduto, useEditarProduto, useImportarProduto } from "../../hooks/produtoHooks";
import { MainContext } from './../../contexts/MainContext';
import * as XLSX from 'xlsx';
import img from "../../assets/img-error.png"

const Produtos = () => {

    const [verCriar, setVerCriar] = useState(false);
    const [verEditar, setVerEditar] = useState(false);
    const [verImportar, setVerImportar] = useState(false);
    const [formCriar] = Form.useForm();
    const [formEditar] = Form.useForm();
    const [formImportar] = Form.useForm();
    const { data: produtos, isFetching: produtosFetching } = useBuscarProduto();
    const { mutateAsync: criarProduto, isPending: criarPending } = useCriarProduto();
    const { mutateAsync: editarProduto, isPending: editarPending } = useEditarProduto();
    const { mutateAsync: deletarProduto } = useDeletarProduto();
    const { mutateAsync: importarProduto, isPending: importarPending } = useImportarProduto();
    const { api } = useContext(MainContext);

    const colunasEsperadas = ['codigo', 'nome', 'preco'];

    const validarArquivo = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });

                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];

                const rows = XLSX.utils.sheet_to_json(worksheet, {
                    header: 1,
                    defval: '',
                    blankrows: false
                });

                if (!rows.length) {
                    return reject('Arquivo vazio.');
                }

                const header = rows[0]
                    .map(col => String(col).trim().toLowerCase());

                const ordemCorreta =
                    header.length === colunasEsperadas.length &&
                    header.every((col, index) => col === colunasEsperadas[index]);

                if (!ordemCorreta) {
                    return reject(
                        'O cabeçalho deve ser exatamente: codigo, nome, preco.'
                    );
                }

                for (let i = 1; i < rows.length; i++) {
                    const [codigo, nome, preco] = rows[i];

                    const linhaVazia =
                        !codigo && !nome && !preco;

                    if (linhaVazia) {
                        return reject(
                            `Linha ${i + 1} está vazia.`
                        );
                    }

                    if (!codigo || !nome || preco === '') {
                        return reject(
                            `Linha ${i + 1} possui campos obrigatórios vazios.`
                        );
                    }

                    if (isNaN(Number(preco))) {
                        return reject(
                            `Linha ${i + 1}: o campo "preco" deve ser numérico.`
                        );
                    }
                }
                resolve();
            };

            reader.readAsArrayBuffer(file);
        });
    };

    function importar(dados) {
        importarProduto(dados, {
            onSuccess: (response) => {
                api[response.type]({
                    description: response.description
                });
            },
            onError: ({ response }) => {
                api[response.data.type]({
                    description: response.data.description
                });
            },
        });
        formImportar.resetFields();
        setVerCriar(false);
    }

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
            <div className="mb-6 lg:flex lg:justify-between lg:items-center">
                <h2 className="font-bold text-xl text-azul mb-2">Produtos</h2>
                <div className="flex gap-4">
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        className="w-full lg:w-auto lg:px-8!"
                        onClick={() => setVerImportar(true)}
                    >
                        Importar produtos
                    </Button>
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        className="w-full lg:w-auto lg:px-8!"
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
                className="rounded-lg overflow-hidden shadow-xl lg:hidden"
            >
                <Table.Column
                    title="Produto"
                    render={(_, linha) => (
                        <div className="">
                            <div className="flex gap-4 items-start">
                                {
                                    linha.foto ? (
                                        <Image
                                            src={linha.foto}
                                            className="w-10! h-10! rounded-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = img
                                            }}
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-lg bg-stone-200 font-bold flex justify-center items-center text-stone-600 uppercase">
                                            <LuImage />
                                        </div>
                                    )
                                }
                                <div className="flex-1">
                                    <div className="text-lg leading-5">{linha.nome}</div>
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

            <Table
                dataSource={produtos || []}
                rowKey={"id"}
                loading={produtosFetching}
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
                    dataIndex={"nome"}
                    key={"nome"}
                />
                <Table.Column
                    title="Preço base"
                    render={(_, linha) => `R$ ${linha.preco.toFixed(2)}`}
                />
                <Table.Column
                    title="Código"
                    dataIndex={"codigo"}
                    key={"codigo"}
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
                                    formEditar.setFieldsValue({
                                        ...linha,
                                        produtos: linha.produtos.map(p => p.produtoId)
                                    })
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
                            loading={criarPending}
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
                            loading={editarPending}
                        >
                            Editar
                        </Button>
                    </div>
                </Form>
            </Drawer>

            <Drawer
                title="Importar"
                open={verImportar}
                onClose={() => setVerImportar(false)}
            >
                <Form
                    layout="vertical"
                    onFinish={importar}
                    encType="multipart/form-data"
                    form={formImportar}
                >
                    <Form.Item
                        label="Arquivo"
                        name={'arquivo'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                        valuePropName="fileList"
                        getValueFromEvent={(e) => {
                            if (Array.isArray(e)) return e;
                            return e?.fileList;
                        }}
                    >
                        <Upload
                            accept=".xls,.xlsx,.csv"
                            maxCount={1}
                            beforeUpload={async (file) => {
                                try {
                                    await validarArquivo(file);
                                    api.success({ description: 'Arquivo válido!' });
                                    return false;
                                } catch (erro) {
                                    api.error({ description: erro });
                                    return Upload.LIST_IGNORE;
                                }
                            }}
                        >
                            <Button type="primary">
                                <LuUpload /> Carregar arquivo
                            </Button>
                        </Upload>
                    </Form.Item>
                    <div className="flex justify-end">
                        <Button
                            type="primary"
                            htmlType="submit"
                            shape="round"
                            className="w-25!"
                            loading={importarPending}
                        >
                            Importar
                        </Button>
                    </div>
                </Form>
            </Drawer>
        </div>
    );
}

export default Produtos;