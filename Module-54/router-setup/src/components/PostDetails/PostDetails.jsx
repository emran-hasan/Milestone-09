import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'
const PostDetails = () => {
    const postDetails = useLoaderData()
    const navigate = useNavigate()
    const handleGoBack =()=>{
        navigate(-1)
    }

    return (
        <div>
            <h1>Hare all post details</h1>
            <div className='postDetails'>
                <h4>{postDetails.userId}</h4>
                <p>{postDetails.body}</p>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;