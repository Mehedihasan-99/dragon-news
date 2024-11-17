import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='nav flex gap-4'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className='login flex gap-2'>
                <img src={userIcon} alt="" className='rounded-full'/>
                <Link to={"/auth/login"} className='btn btn-neutral rounded-none px-10 py-3 text-white font-semibold'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;