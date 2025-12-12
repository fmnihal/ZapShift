import React from 'react';
import Logo from '../../components/Logo';
import {Link, NavLink} from 'react-router';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
    const {user, logOut}= useAuth();
    const handleLogOut= ()=>{
        logOut()
            .then(result=>{console.log(result.user)})
            .catch(e=>{console.log(e)});
    }
    const links= <>
        <li><NavLink to="">Services</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        <li><NavLink to="/send-parcel">Send Parcel</NavLink></li>
        <li><NavLink to="">Pricing</NavLink></li>
        <li><NavLink to="">Be a Rider</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <Logo></Logo>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">ZapShift</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {links}
            </ul>
        </div>
        <div className="navbar-end">
            {
                user ? <a className='btn'>Log Out</a> : <Link className='btn' to='/login'>Login</Link>
            }
        </div>
        </div>
    );
};

export default NavBar;