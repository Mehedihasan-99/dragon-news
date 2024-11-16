import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatestNews/>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default MainLayout;