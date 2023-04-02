import React from 'react';

const LIst = ({route}) => {
    return (
        <div>
            <li className='mr-8 text-white hover:text-cyan-950'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default LIst;