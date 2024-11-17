import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
            <div>{ user && user.email}</div>
            <div className='nav flex gap-4'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className='login flex gap-2'>
                <img src={userIcon} alt="" className='rounded-full'/>
                <div>
                    {
                        user && user?.email ? <button onClick={logout} className='btn btn-neutral rounded-none px-10 py-3 text-white font-semibold'>Logout</button> :<Link to={"/auth/login"} className='btn btn-neutral rounded-none px-10 py-3 text-white font-semibold'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;