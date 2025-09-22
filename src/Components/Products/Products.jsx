import React, { use, useEffect, useState } from 'react';
import Product from '../Product/Product';
import Categories from '../Categories/Categories';
import './Products.css'
import { addToStoredCart, getStoredCart, removeFromCart } from '../../utilities/LocalStorage';
import Cart from '../Cart/Cart';
const Products = ({productsPromise}) => {
    const productsData = use(productsPromise)
    const products = productsData.products;
    // console.log(products)

    //useEffect to find and get the product with cart which was stored in localstorage
    useEffect(()=>{
        const storedCartIds = getStoredCart()
        // console.log(storedCartIds, products);
        const storedCart = []
        for(const id of storedCartIds){
            // console.log(id)
            const cartProduct = products.find(product => product.id === id)

            if(cartProduct) {
                storedCart.push(cartProduct)
            }
        }
        setCart(storedCart)

        
    }, [products])



    const [cart, setCart] = useState([])
    //cart handler where cart products are stored full
    const handleCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        console.log('cart added', cart)

        //add cart id to local storage
        addToStoredCart(product.id)

    }

    const handleRemoveFromCart = id => {
        console.log('remove item from the cart', id)
        const remainingCart = cart.filter(product => product.id != id)
        setCart(remainingCart)
        removeFromCart(id)
    }
    return (
        <div>
            <h2>Latest Products</h2>
            <p>Products: {products.length}</p>
            <p>Cart Item: {cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='card-container'>
                {products.map((product, index) => <Product product={product} handleCart={handleCart} key={index}></Product>)}
            </div>
        </div>
            
    );
};

export default Products;