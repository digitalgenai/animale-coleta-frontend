import { notification } from "antd";
import { createContext } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {

    const [api, contextHolder] = notification.useNotification({
        placement: "topRight"
    });

    return (
        <MainContext.Provider value={{ api }}>
            {contextHolder}
            {children}
        </MainContext.Provider>
    );
}

export default MainProvider;