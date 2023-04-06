import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendsDetails.css'

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h3>Everything about this person is here </h3>
            <div className='friends-details'>
                <h4>Name: {friend.name}</h4>
                <p>PHone: {friend.phone}</p>
                <p>Email: {friend.email}</p>
                <p>Website: {friend.website}</p>
            </div>
        </div>
    );
};

export default FriendDetail;