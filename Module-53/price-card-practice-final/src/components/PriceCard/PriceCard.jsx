import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-green-300 p-5  rounded-xl drop-shadow-lg flex flex-col'>
            <h1 className='text-center'>
                <span className=' text-5xl font-extrabold text-purple-800'>{price.price}</span>
                <span className='text-white font-bold text-xl'>/mon</span>
             </h1>
            <h6 className='text-center text-lg md:text-2xl font-bold my-3'>{price.name}</h6>
            <p className='text-lg font-bold'>Features:</p>
                <div className='mb-5'>
                    {
                        price.features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                        ></Feature>)
                    }
                </div>
                <button className='w-full bg-orange-400 hover:bg-orange-600 p-5  mt-auto font-semibold rounded-lg'>Buy Now</button>
            </div>
    );
};

export default PriceCard;