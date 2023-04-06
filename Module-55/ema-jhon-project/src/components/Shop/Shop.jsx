import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';


const Shop = () => {
    const data =useLoaderData()
    console.log(data);
    return (
        <div>
            <h1>Shop: {data.length}</h1>
            <div>
                {
                    data.map(product =><Product
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;