import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h1>Friend list: {friends.length}</h1>
            <div className='friends'>
                {
                    friends.map(friend => <Friend
                    friend={friend}
                    ></Friend>)
                }
                
            </div>
        </div>
    );
};

export default Friends;