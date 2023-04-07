import React from 'react';
import './TShirt.css'


const TShirt = ({tShirt,handleAddToCart}) => {
    const {picture,name,price,gender} = tShirt
    return (
        <div className='t-shirt'>
            <h2>{name}</h2>
            <img src={picture} alt="" />
            <p>Price: ${price}</p>
            <p>{gender}</p>
            <button onClick={()=> handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;