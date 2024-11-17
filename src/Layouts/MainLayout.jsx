import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/Layout-component/LeftNavbar";
import RightNavbar from "../components/Layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header />
                <section className="w-11/12 lg:max-w-[1140px] mx-auto">
                    <LatestNews />
                </section>
            </header>
            <nav className="w-11/12 lg:max-w-[1140px] mx-auto">
                <Navbar />
            </nav>
            <main className="w-11/12 lg:max-w-[1140px] mx-auto grid md:grid-cols-12 gap-5 mt-20">
            <aside className="left border col-span-3"><LeftNavbar/></aside>
            <section className="center border col-span-6">Center</section>
            <aside className="right border col-span-3"><RightNavbar/></aside>
            </main>
        </div>
    );
};

export default MainLayout;