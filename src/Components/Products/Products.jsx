import React, { use } from 'react';
import Product from '../Product/Product';
import Categories from '../Categories/Categories';
import './Products.css'
const Products = ({productsPromise}) => {
    const productsData = use(productsPromise)
    const products = productsData.products;
    // console.log(products)
    return (
        <div>
            <h2>Latest Products</h2>
            <div className='card-container'>
                {products.map((product, index) => <Product product={product} key={index}></Product>)}
            </div>
        </div>
            
    );
};

export default Products;