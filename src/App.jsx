import React from 'react'
import { useFetch } from './hooks/useFetch'

const App = () => {
   const productsList = useFetch("https://dummyjson.com/products")
   const categoriesList = useFetch('https://dummyjson.com/products/categories')
   console.log(productsList)
   console.log(categoriesList)

 
  return (
    <div className='text-red-700'>
      {productsList.map(item => (
        <>
           <h2>{item.title}</h2>
        </>
      ))}
    </div>
  )
}

export default App
