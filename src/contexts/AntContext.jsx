import { ConfigProvider } from "antd";

const AntContext = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {},
                components: {
                    Input: {
                        colorPrimary: '#002855',
                        hoverBorderColor: '#002855',
                        paddingBlock: 8
                    },
                    InputNumber: {
                        colorPrimary: '#002855',
                        hoverBorderColor: '#002855',
                        paddingBlock: 8
                    },
                    Button: {
                        colorPrimary: '#FFBF45',
                        colorPrimaryHover: '#EB9A00',
                        primaryColor: '#002855',
                        fontWeight: 'bold'
                    },
                    Table: {
                        headerBg: "#FFFFFF",
                        headerColor: "#002855",
                        footerBg: "#FFFFFF"
                    }
                }
            }}
        >
            {children}
        </ConfigProvider>
    );
}

export default AntContext;