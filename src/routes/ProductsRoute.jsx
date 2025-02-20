import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Products, SinglePage} from "../Pages"
import Layout from '../Features'
const ProductsRoute = () => {
  return (
  <Layout>
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/:id' element={<SinglePage/>}/>
    </Routes>
  </Layout>
  )
}

export default ProductsRoute
