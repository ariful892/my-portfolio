import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../Assets/arif.jpg';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='home#about'>About</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>

                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl text-secondary"><img width={50} src={icon} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='home#about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://drive.google.com/file/d/1dtdLfJkKiz5mgA8dPlfXrRGJDfJDimay/view?usp=sharing' className="btn btn-sm btn-outline btn-primary">Resume</a>

            </div>
        </div>
    );
};

export default Navbar;