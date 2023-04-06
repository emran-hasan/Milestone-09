import React from 'react';
import './SinglePost.css'
import { Link } from 'react-router-dom';

const SinglePost = ({post}) => {
    const {id,title,body} = post
    console.log(post);
    return (
        <div className='single-post'>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to = {`post/${id}`}>Show Details</Link>
            <button>Show post details</button>
        </div>
    );
};

export default SinglePost;