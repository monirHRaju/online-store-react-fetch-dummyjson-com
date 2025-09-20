import { Suspense } from 'react'
import './App.css'
import Products from './Components/Products/Products'
import Categories from './Components/Categories/Categories'
const productsPromise = fetch('https://dummyjson.com/products')
  .then(res => res.json())

  const categoryPromise = fetch('https://dummyjson.com/products/categories')
  .then(res => res.json())

function App() {
  
  return (
    <div>
      <h1>Online Store</h1>
      <div className='product-section'>
        <Suspense fallback="Category is loading...">
          <Categories categoryPromise={categoryPromise}></Categories>
        </Suspense>

        
        <Suspense fallback="data is loading...">
          <Products productsPromise={productsPromise}></Products>
        </Suspense>
      </div>
      
    </div>
  )
}

export default App
