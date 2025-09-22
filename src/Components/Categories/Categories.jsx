import React, { use, useState } from 'react';
import Category from '../Category/Category';

const Categories = ({categoryPromise, onSelectCategory}) => {
    const categories = use(categoryPromise)
    // console.log(categories);
    const [singleCategory, setSingleCategory] = useState('')
    const handleSingleCategory = (categorySlug) => {
        console.log(singleCategory)
        setSingleCategory(categorySlug)
    }

    
    return (
        <div>
            <h3>Categories</h3>
            <ul className='category-container'>
                {
                    categories.map((category, index) => <Category category={category} key={index} handleSingleCategory={handleSingleCategory}></Category>)
                }
            </ul>
        </div> 
    );
};

export default Categories;