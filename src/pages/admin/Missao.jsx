import { Button, Drawer, Form, Image, Input, Popconfirm, Select, Table, Tag, Upload } from "antd";
import { useContext, useState } from "react";
import { LuFileDown, LuMapPin, LuMessageCircle, LuPencil, LuShoppingCart, LuTrash, LuUpload } from "react-icons/lu";
import { useBuscarMissao, useCriarMissao, useDeletarMissao, useEditarMissao } from "../../hooks/missaoHooks";
import { MainContext } from './../../contexts/MainContext';
import { useBuscarConcorrente } from './../../hooks/concorrenteHooks';
import { useBuscarProduto } from "../../hooks/produtoHooks";
import img from "../../assets/img-error.png"
import * as XLSX from 'xlsx';

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
    const colunasEsperadas = ['codigo', 'nome', 'preco'];

    function criar(dados) {
        criarMissao(dados, {
            onSuccess: (response) => {
                api[response.type]({
                    description: response.description,
                    onClose: () => setVerCriar(false)
                });
            },
            onError: ({response}) => {
                api[response.data.type]({
                    description: response.data.description,
                    onClose: () => setVerCriar(false)
                });
            },
        });
        formCriar.resetFields();
        
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

    return (
        <div>
            <div className="mb-6 lg:flex lg:justify-between lg:items-center">
                <h2 className="font-bold text-xl text-azul mb-2">Missões</h2>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="w-full lg:w-auto lg:px-8!"
                    onClick={() => setVerCriar(true)}
                >
                    Nova missão
                </Button>
            </div>

            <Table
                dataSource={missao || []}
                rowKey={"id"}
                loading={missaoFetching}
                className="rounded-lg overflow-hidden shadow-xl lg:hidden"
            >
                <Table.Column
                    title="Missão"
                    render={(_, linha) => (
                        <div className="">
                            <div className="flex gap-4 items-start">
                                {
                                    linha.concorrente.foto ? (
                                        <Image
                                            src={linha.concorrente.foto}
                                            className="w-12! h-12! rounded-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = img
                                            }}
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase">
                                            {linha.concorrente.nome.substring(0, 2)}
                                        </div>
                                    )
                                }
                                <div className="flex-1 flex justify-between h-10 items-center">
                                    <div className="text-lg">{linha.concorrente.nome}</div>
                                    <Tag color={linha.concorrente.tipo == 'Online' ? '#EB9A00' : '#002855'} variant="outlined">Loja {linha.concorrente.tipo}</Tag>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center mt-4">
                                <div className="w-10 h-10 flex justify-center items-center text-lg">
                                    <LuMapPin />
                                </div>
                                <div className="leading-4">
                                    <h6 className="text-azul font-bold">Endereço:</h6>
                                    {linha.concorrente.endereco}
                                </div>
                            </div>
                            <div className="flex gap-4 items-center mt-4">
                                <div className="w-10 h-10 flex justify-center items-center text-lg">
                                    <LuShoppingCart />
                                </div>
                                <div className="leading-4">
                                    <h6 className="text-azul font-bold">Coleta:</h6>
                                    {linha.produtos.length} produtos
                                </div>
                            </div>
                            <div className="flex gap-4 items-center mt-4">
                                <div className="w-10 h-10 flex justify-center items-center text-lg">
                                    <LuMessageCircle />
                                </div>
                                <div className="leading-4">
                                    <h6 className="text-azul font-bold">Observações:</h6>
                                    {linha.titulo ? linha.titulo : 'Nenhuma'}
                                </div>
                            </div>
                            <div className="flex justify-end gap-4">
                                <Button
                                    type="text"
                                    onClick={() => {
                                        delete linha.foto;
                                        formEditar.setFieldsValue({
                                            ...linha,
                                            produtos: linha.produtos.map(p => p.produtoId)
                                        })
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
                dataSource={missao || []}
                rowKey={"id"}
                loading={missaoFetching}
                className="rounded-lg overflow-hidden shadow-xl hidden lg:block"
            >
                <Table.Column
                    className="w-8"
                    render={(_, linha) =>
                        linha.concorrente.foto ? (
                            <div className="w-8 h-8">
                                <Image
                                    src={linha.concorrente.foto}
                                    className="w-8! h-8! rounded-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = img
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-azul font-bold flex justify-center items-center text-white uppercase text-xs">
                                {linha.concorrente.nome.substring(0, 2)}
                            </div>
                        )
                    }
                />
                <Table.Column
                    title="Nome"
                    render={(_, linha) => (
                        <div>
                            {linha.concorrente.nome}
                        </div>
                    )}
                />
                <Table.Column
                    title="Endereço"
                    render={(_, linha) => (
                        <div>
                            {linha.concorrente.endereco}
                        </div>
                    )}
                />
                <Table.Column
                    className="w-30"
                    title="Tipo"
                    render={(_, linha) => (
                        <div>
                            Loja {linha.concorrente.tipo}
                        </div>
                    )}
                />
                <Table.Column
                    className="w-25"
                    title="Itens"
                    render={(_, linha) => (
                        <div>
                            {linha.produtos.length} Produtos
                        </div>
                    )}
                />
                <Table.Column
                    className="w-25"
                    title="Status"
                    render={(_, linha) => (
                        <div className={`font-bold uppercase text-xs ${linha.status == "pendente" ? "text-red-600" : "text-green-600"}`}>
                            {linha.status}
                        </div>
                    )}
                />
                <Table.Column
                    className="w-25"
                    title="Ações"
                    render={(_, linha) => (
                        <div className="flex justify-end gap-4">
                            <Button
                                icon={<LuFileDown />}
                                type="primary"
                                disabled={linha.status != 'concluído'}
                                onClick={() => {
                                    gerarCSV(linha)
                                }}
                            />
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
                >
                    <Form.Item
                        label="Concorrente"
                        name={'concorrenteId'}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
                    >
                        <Select
                            placeholder={"Escolha o concorrente"}
                            options={(concorrentes || []).map(concorrente => {
                                return {
                                    label: concorrente.nome + ' - Loja ' + concorrente.tipo,
                                    value: concorrente.id
                                }
                            })}
                        />
                    </Form.Item>

                    {/* <Form.Item
                        label={"Produtos da missão"}
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
                    </Form.Item> */}

                    <Form.Item
                        label="Arquivo"
                        name={'arquivo'}
                        valuePropName="file"
                        getValueFromEvent={(e) => e.file}
                        // valuePropName="fileList"
                        // getValueFromEvent={(e) => {
                        //     if (Array.isArray(e)) return e;
                        //     return e?.fileList;
                        // }}
                        rules={[{ required: true, message: 'Campo obrigatório' }]}
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
                                <LuUpload /> Carregar lista de produtos
                            </Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="Observações"
                        name={'titulo'}
                    >
                        <Input.TextArea />
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

                    <Form.Item
                        label="Observações"
                        name={'titulo'}
                    >
                        <Input.TextArea />
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