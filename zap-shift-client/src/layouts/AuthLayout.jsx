import React from 'react';
import Logo from '../components/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className='border-2 border-red-500 w-3/5 mx-auto mt-'>
            <Logo></Logo>
            <div className='flex justify-between'>
                <Outlet></Outlet>
                <img src={authImg} alt="" />
            </div>
        </div>
    );
};

export default AuthLayout;