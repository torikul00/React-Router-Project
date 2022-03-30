import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import CustomLink from '../CustomeLink/CustomeLink';

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
                    <CustomLink className='custom' to="/">Home</CustomLink>
                    <CustomLink className='custom' to="/about">About</CustomLink>
                    <CustomLink className='custom' to="category">Category</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;