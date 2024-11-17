import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password) 
        userLogin(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch(error => alert(error.code));
        
    }

    return (
        <div className="bg-base-100 w-11/12 md:max-w-[750px] mx-auto mt-32">
            <div className="flex flex-col gap-12 p-[72px]">
                <h2 className="text-center font-semibold text-4xl">Login your account</h2>
                <div className="border"></div>
                <form onSubmit={handleSubmit} className="card-body p-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold ">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input bg-base-200" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                <p className="text-center pt-7">Don't Have An Account ? <Link to='/auth/register'><span className="text-red-500">Register</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;