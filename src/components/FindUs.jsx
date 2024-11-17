import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold text-xl mb-2">Find Us</h2>
            <div className="join join-vertical w-full *:bg-base-100 *:shadow-none *:justify-start mb-5">
                <button className="btn join-item "> <FaFacebook/> Facebook</button>
                <button className="btn join-item"><FaTwitter/> Twitter</button>
                <button className="btn join-item"><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;