import { Link } from "react-router-dom";

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="bg-base-100 w-11/12 md:max-w-[750px] mx-auto mt-32">
            <div className="flex flex-col gap-12 p-[72px]">
                <h2 className="text-center font-semibold text-4xl">Login your account</h2>
                <div className="border"></div>
                <form onSubmit={handleSubmit} className="card-body p-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold ">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold ">Photo URL</span>
                        </label>
                        <input type="file" name="photo" placeholder="Enter your profile picture" className="p-3 rounded-lg bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold ">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input bg-base-200" required />
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" name="terms" required />
                        <span>Accept Term & Conditions</span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center pt-7">I have An Account ? <Link to='/auth/login'><span className="text-red-500">Login</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;