import React from 'react';
import './SinglePost.css'
import { Link, useNavigate } from 'react-router-dom';

const SinglePost = ({post}) => {
    const {title,id} = post
    const navigate = useNavigate()

    const handlerNavigate =()=>{
        navigate(`/posts/${id}`)
    }
    return (
        <div className='single-post'>
            <h3>{id}</h3>
            <h4>{title}</h4>
            <Link to={`/posts/${id}`}>Details</Link>
            <Link to={`/posts/${id}`}><button>Show Post Details</button></Link>
            {/* second option */}
            <button onClick={handlerNavigate}>Show Post Details</button>
        </div>
    );
};

export default SinglePost;