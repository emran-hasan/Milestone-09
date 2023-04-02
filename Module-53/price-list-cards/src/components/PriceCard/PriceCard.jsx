import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
            <div className='bg-indigo-300 p-4 mt-4 rounded-md flex flex-col'>
                 <h1 className='text-center'>
                    <span className='text-5xl font-extrabold text-purple-950'>{price.price}</span>
                    <span className='text-2xl'>/mon</span>
                </h1>
                 <h4 className='text-center font-bold my-6 text-2xl'> {price.name}</h4>
                 <p className='font-bold'>Features:</p>
                 {
                    price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                    ></Feature>)
                 }
                 <button className='w-full bg-amber-600 rounded-md py-3 mt-auto font-bold 
                 hover:bg-amber-700'>Buy Now</button>
            </div>
    );
};

export default PriceCard;