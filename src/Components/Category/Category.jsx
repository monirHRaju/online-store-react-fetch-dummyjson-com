import React from 'react';

const Category = ({category}) => {
    console.log(category);
    
    return (
            <li>{category.name}</li>



    );
};

export default Category;

// {
//     "slug": "womens-bags",
//     "name": "Womens Bags",
//     "url": "https://dummyjson.com/products/category/womens-bags"
// }