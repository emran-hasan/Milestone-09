import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './grandpa.css'
export const RingContext = createContext('Golden');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring ='Dimon';
    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa'>
           <h1>Grandpa</h1>
           <p>Has money: {money}</p> 
          <MoneyContext.Provider value={[money, setMoney]}>
            
            <RingContext.Provider value='Golden Ring'>
              <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
              </section>
            </RingContext.Provider>

          </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. create context and expose it
 * 2.create a provider and pass a value
 * 3.use useContext to receive the context
*/