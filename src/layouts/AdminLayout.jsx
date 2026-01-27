import { Outlet } from "react-router";
import Menu from "../components/Menu";
import Header from "../components/Header";

const AdminLayout = () => {
    return (
        <div className="h-dvh flex flex-col bg-stone-100 relative">
            <Header />
            <div className="flex-1 p-4 lg:p-15 pb-10 overflow-auto">
                <Outlet />
            </div>
            <Menu />
            <div className="w-full h-10 bg-linear-to-b lg:hidden from-transparent to-stone-100 absolute bottom-22.5 left-0"></div>
        </div>
    );
}

export default AdminLayout;