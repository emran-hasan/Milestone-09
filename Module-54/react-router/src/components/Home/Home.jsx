import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is simple of home page!</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;