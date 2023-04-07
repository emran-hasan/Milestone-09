import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Speacial = ({ring}) => {
    const anti = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Ring: {anti}</p>
        </div>
    );
};

export default Speacial;