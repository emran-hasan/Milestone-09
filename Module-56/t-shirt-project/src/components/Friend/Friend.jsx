import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h3>Friend</h3>
            <p> {ring && <p>Ring: Daimon</p>}</p>
        </div>
    );
};

export default Friend;