import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = ({children, hasFriend,ring}) => {
    const newRing = useContext(RingContext)
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            { hasFriend && <Friend ring={newRing}></Friend>}
        </div>
    );
};

export default Cousin;
