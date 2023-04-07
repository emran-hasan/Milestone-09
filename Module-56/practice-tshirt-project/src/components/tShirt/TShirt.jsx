import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt,addToCart}) => {
    const {picture,name,price,gender} = tShirt
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{gender}</p>
            <button onClick={()=>addToCart(tShirt)} className='btn-buy'>Buy Now</button>
        </div>
    );
};

export default TShirt;