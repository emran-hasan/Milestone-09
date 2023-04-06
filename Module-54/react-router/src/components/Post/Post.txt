import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../../../SinglePost/SinglePost';
import './psot.css'

const Post = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h1>Total post:{posts.length}</h1>
            <div className='post'>
            {
                posts.map(post => <SinglePost
                key={post.id}
                post={post}
                ></SinglePost>)
            }
            </div>
        </div>
    );
};

export default Post;