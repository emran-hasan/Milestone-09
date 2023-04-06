import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name,email,website,phone} = friend
    return (
        <div className='friend'>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p><Link to= {`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;