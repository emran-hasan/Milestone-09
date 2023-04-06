import React from 'react';
import './SingleUser.css'
import { Link } from 'react-router-dom';


const SingleUser = ({user}) => {
    const {name,email,phone,website,id} =user
    return (
        <div className='single-user'>
            <h4>{name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p><Link to= {`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default SingleUser;