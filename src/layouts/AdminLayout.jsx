import { Outlet } from "react-router";
import Menu from "../components/Menu";
import Header from "../components/Header";

const AdminLayout = () => {
    return (
        <div className="h-screen flex flex-col bg-stone-100">
            <Header />
            <div className="flex-1 p-4">
                <Outlet />
            </div>
            <Menu />
        </div>
    );
}

export default AdminLayout;