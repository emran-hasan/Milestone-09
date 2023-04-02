import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])
    return (
        <div className='mx-12'>
            <h1 className=' text-2xl md:text-5xl text-center text-purple-900 my-4'>Aewsome Affordable Price</h1>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    prices.map(price => <PriceCard
                    
                    key={price.id}
                    price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;