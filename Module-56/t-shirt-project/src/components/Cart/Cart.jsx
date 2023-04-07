import React from 'react';
import TShirt from '../TShirt/TShirt';
import './cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if (cart.length === 0) {
        message = <h3 >Please add some products</h3>
    }
    else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length ===2 ? 'yellow' : 'orange'} >Order Summary: {cart.length}</h2>
            {message}
            {
                cart.length > 2 ? 'Not enough money! ': 'Please buy more..'
            }
            

            {
                cart.map(tShirt =><p 
                    key={tShirt._id} >{tShirt.name} 
                    <button onClick={()=>handleRemoveFromCart(tShirt._id)}>X</button></p>)
            }
            {
               cart.length ===2 && <p >Double buy</p>
            }
            <p className={cart.length > 3 ? "green pdding-1" : 'purple pdding-2'}>Please added more</p>
            {cart.length === 3 || <p>3 ta hoilona</p>}
        </div>
    );
};

export default Cart;
/**
 * conditional Rendering:
 * 1. use if else to se a variable that will contain an element, components
 * 2.ternary: condition ? 'for true' : 'for false'
 * 3. Logical &&: if the condition is true then the next thing will be displayed
 * 3. Logical || : if the condition is false then the next thing will be displayed
 */

