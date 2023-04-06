import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
    const details = useLoaderData()
    return (
        <div>
            <h1>Friend Details</h1>
            <div  className='details'>
                <h3>{details.name}</h3>
                <p>{details.phone}</p>
                <p>{details.email}</p>
                <p>{details.website}</p>
            </div>
        </div>
    );
};

export default FriendDetails;