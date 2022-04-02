import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    const navigate = useNavigate()
    const backHome = () => {
        navigate('/')
    }
    return (
        <div >
            <nav>
                <div>
                    <h2 onClick={backHome} className='logo'>Food Corner </h2>
                </div>
                <div className="links">
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active-link' : 'link'} to="/">Home</NavLink>
                    
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active-link' : 'link'} to="login">Log in</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active-link' : 'link'} to="/about">About</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;