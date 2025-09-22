import React from 'react';

const Category = ({category, handleSingleCategory}) => {
    // console.log(category);
    
    return (
            <li id={category.category} onClick={() => handleSingleCategory(category.slug)}>{category.name}</li>
    );
};

export default Category;

// {
//     "slug": "womens-bags",
//     "name": "Womens Bags",
//     "url": "https://dummyjson.com/products/category/womens-bags"
// }