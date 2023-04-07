import React from 'react';

const Cart = ({cart,removeFromCart}) => {
    return (
        <div>
            <h4>Total Added: {cart.length}</h4>
            {
                cart.map(cart =><p key={cart._id}>{cart.name} <button onClick={()=>removeFromCart(cart._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;