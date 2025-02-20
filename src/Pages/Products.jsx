import React from 'react'
import getRequest from '../service/getRequest'
import ProdcutCard from '../Components/ProductCard'

const Products = () => {
    const {products} = getRequest("/products")
    console.log(products)
  return (
    <div className='flex flex-wrap justify-center gap-2 py-5'>
      {products?.map(item => <ProdcutCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Products
