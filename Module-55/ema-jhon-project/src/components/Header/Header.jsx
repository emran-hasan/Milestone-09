import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container py-4'>
            <div className="logo-container ">
                <img src="Logo.svg" alt="aa" />
            </div>
            <div className="menu-container ml-8 text-white ">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;