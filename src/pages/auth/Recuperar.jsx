import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { useRecuperar } from "../../hooks/usuarioHooks";
import logo from "../../assets/logo.png";
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router";

const Recuperar = () => {

    const { mutateAsync: recuperar } = useRecuperar();
    const { api } = useContext(MainContext);

    function recuperarSenha(dados) {
        recuperar(dados, {
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
        <div className="h-screen flex justify-center items-center bg-azul p-4">
            <div className="w-[350px] bg-white p-5 rounded-4xl">
                <Form
                    layout="vertical"
                    onFinish={recuperarSenha}
                >
                    <Link to={"/"} className="flex items-center gap-4 text-azul!">
                        <LuArrowLeft size={24}/>
                        <strong>Voltar</strong>
                    </Link>
                    <img
                        src={logo}
                        alt="Animale"
                        className="block m-auto p-8"
                    />
                    <p className="mb-4 text-center">Informe seu email e enviaremos uma nova senha.</p>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Campo Obrigatório' }]}
                    >
                        <Input placeholder="email@email.com" />
                    </Form.Item>
                    <div className="flex justify-center mt-6">
                        <Button
                            type="primary"
                            htmlType="submit"
                            shape="round"
                            size="large"
                            className="w-full"
                        >
                            Enviar
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Recuperar;