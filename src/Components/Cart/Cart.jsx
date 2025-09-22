import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div className='cart-items'>
            {
                cart.map(product => <div key={product.id}>
                    <img src={product.images[1]} width='100px'></img>
                    <button onClick={()=> handleRemoveFromCart(product.id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default Cart;