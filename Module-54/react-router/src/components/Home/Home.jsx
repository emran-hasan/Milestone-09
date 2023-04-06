import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
<<<<<<< HEAD
            <h1>This is simple of home page!</h1>
=======
>>>>>>> b4168bbfd1bf041d762184e95f764b449fe4c466
            <Outlet></Outlet>
        </div>
    );
};

export default Home;