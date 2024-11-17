import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-base-200 pt-12 min-h-screen font-poppins">
            <nav className="w-11/12 lg:max-w-[1140px] mx-auto">
                <Navbar />
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;