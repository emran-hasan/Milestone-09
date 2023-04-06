import React from 'react';

const Product = ({product}) => {
    return (
        <div className='bg-orange-200 m-4'>
            <h2>{product.name}</h2>
            <p>{product.id}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default Product;