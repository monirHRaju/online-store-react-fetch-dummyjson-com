import React, { use } from 'react';
import Category from '../Category/Category';

const Categories = ({categoryPromise}) => {
    const categories = use(categoryPromise)
    console.log(categories);
    
    return (
        <div>
            <h3>Categories</h3>
            <ul className='category-container'>
                {
                    categories.map(category => <Category category={category}></Category>)
                }
            </ul>
        </div>
    );
};

export default Categories;