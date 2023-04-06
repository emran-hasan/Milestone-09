import React from 'react';
<<<<<<< HEAD

const Header = () => {
    return (
        <div>
            <a href="home">Home</a>
            <a href="contact">Contact</a>
            <a href="about">About</a>
        </div>
=======
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/post">Post</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/vite">Vite</Link>

        </nav>
>>>>>>> b4168bbfd1bf041d762184e95f764b449fe4c466
    );
};

export default Header;