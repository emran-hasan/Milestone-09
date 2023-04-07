import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../tShirt/TShirt';
import './Home.css'
import Cart from '../Cart/Cart';
import {  toast } from 'react-toastify';

const Home = () => {
    const tShirts =useLoaderData()

    const [cart, setCart] =useState([])

    const addToCart=tShirt=>{
        const exists = cart.find(ts => ts._id === tShirt._id)
        if(exists){
            toast("You have already added this t-shirt!");
        }else{
            const newCart = [...cart, tShirt]
            setCart(newCart)
        }
    }

    const removeFromCart =id=>{
        const remaining = cart.filter(ts=> ts._id !== id)
        setCart(remaining)
    }

    return (
        <div className='container'>
            
            <div className='products-container'>
            {
                tShirts.map(tShirt => <TShirt
                key={tShirt._id}
                tShirt={tShirt}
                addToCart={addToCart}
                ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <Cart removeFromCart={removeFromCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;