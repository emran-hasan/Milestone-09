import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div>
            <div className='text-lg flex items-center'>
                <CheckCircleIcon className="h-6 w-6 text-white" />
                <p className='ml-2 font-semibold'>{feature}</p>
            </div>
        </div>
    );
};

export default Feature;