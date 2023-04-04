import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleUser from '../singleUser/SingleUser';
import './user.css'

const User = () => {
    const users =useLoaderData();
    console.log(users);
    return (
        <div >
            <h1>Total users: {users.length}</h1>
           
           <div className='users'>
           {
                users.map(user => <SingleUser
                key={user.id}
                user={user}
                ></SingleUser>)
            }
           </div>
        </div>
    );
};

export default User;