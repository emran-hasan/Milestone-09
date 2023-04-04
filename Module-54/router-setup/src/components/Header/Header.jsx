import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header'>
            <ActiveLink  to="/">Home</ActiveLink>
            <ActiveLink to ="/friends">Friends</ActiveLink>
            <ActiveLink to ="/post">Post</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/vite">Vite</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </div>
    );
};

export default Header;