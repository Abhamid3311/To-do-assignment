import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const menuItems = <>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/profile'>Manage Profile</Link></li>


    </>
    return (
        <div>
            <div class="navbar bg-neutral text-neutral-content">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/dashboard' class="btn btn-ghost normal-case text-xl">IELTS Proficiency</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                    <button class="btn"><Link to='/login'>Login</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Header;