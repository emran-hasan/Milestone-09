import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const newRing = useContext(RingContext)
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Sister</h2>
            <p> {newRing}</p>
            <p>Uncle money: {money}</p>
        </div>
    );
};

export default Sister;