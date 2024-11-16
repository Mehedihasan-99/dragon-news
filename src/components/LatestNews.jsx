import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-gray-200 p-2 mt-7">
            <p className="bg-orange-600 px-6 py-2">Latest</p>
            <Marquee pauseOnHover={true} speed={30} className="space-x-40">
                <Link to='news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus hic et alias!</Link>
                <Link to='news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae.</Link>
                <Link to='news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sit!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;