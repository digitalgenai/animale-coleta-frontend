import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router";
import { useLogin } from './../../hooks/usuarioHooks';
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {

    const { mutateAsync: logar, isPending: loginPending } = useLogin();
    const { api } = useContext(MainContext);
    const { entrar } = useContext(AuthContext);
    const navigate = useNavigate();

    function login(dados) {
        logar(dados, {
            onSuccess: (response) => {
                if (response.type == "warning") {
                    api[response.type]({
                        description: response.description,
                    });
                    return;
                }
                
                entrar(response.token, response.usuario);
                navigate("/admin");
            },
            onError: (error) => {
                api[error.response.type]({
                    description: error.response.description
                });
            },
        });
    }

    return (
        <div className="h-screen flex justify-center items-center bg-azul p-4">
            <div className="w-87.5 bg-white p-5 rounded-4xl">
                <Form
                    layout="vertical"
                    onFinish={login}
                >
                    <img
                        src={logo}
                        alt="Animale"
                        className="block m-auto p-8"
                    />
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Campo Obrigatório' }]}
                    >
                        <Input placeholder="email@email.com" />
                    </Form.Item>
                    <Form.Item
                        label="Senha"
                        name="senha"
                        rules={[{ required: true, message: 'Campo Obrigatório' }]}
                    >
                        <Input.Password placeholder="********" />
                    </Form.Item>
                    {/* <div className="text-center">
                        <Link to={'/recuperar'} className="text-azul!">Esqueci minha senha</Link>
                    </div> */}
                    <div className="flex justify-center mt-6">
                        <Button
                            type="primary"
                            htmlType="submit"
                            shape="round"
                            size="large"
                            className="w-full"
                            loading={loginPending}
                        >
                            Entrar
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;