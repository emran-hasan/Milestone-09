import React from 'react';
import Myself from '../Myself/Myself';
import Broother from '../Brother/Broother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h1>Father</h1>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Broother></Broother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;