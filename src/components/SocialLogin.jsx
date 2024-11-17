import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='*:w-full space-y-2 mb-7'>
            <h2 className="font-semibold text-xl mb-2">Login With</h2>
            <button className='btn'><FaGoogle/> Login with Google</button>
            <button className='btn'> <FaGithub /> Login with Github</button>
        </div>
    );
};

export default SocialLogin;