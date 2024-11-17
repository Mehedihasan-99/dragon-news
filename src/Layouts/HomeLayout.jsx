import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/Layout-component/LeftNavbar";
import RightNavbar from "../components/Layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header />
                <section className="w-11/12 lg:max-w-[1140px] mx-auto">
                    <LatestNews />
                </section>
            </header>
            <nav className="w-11/12 lg:max-w-[1140px] mx-auto mt-5">
                <Navbar />
            </nav>
            <main className="w-11/12 lg:max-w-[1140px] mx-auto grid md:grid-cols-12 mt-20">
                <aside className="left col-span-3 p-2">
                    <LeftNavbar />
                </aside>
                <section className="center col-span-6 p-2">
                    <h2 className="font-semibold text-xl mb-5">Dragon News Home</h2>
                    <Outlet />
                </section>
                <aside className="right col-span-3 p-2">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;