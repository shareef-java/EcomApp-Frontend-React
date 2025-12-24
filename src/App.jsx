import React from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'


import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import ShowProduct from './components/ShowProduct'
import EditProduct from './components/EditProduct'



export default function App() {
  return (
    <>
    
  
 
<Routes>
  <Route path='/' element={<ProductList/>}/>
  <Route path='/add' element={<AddProduct/>}/>
  <Route path='/product/:id' element={<ShowProduct/>}/>
  <Route path='/edit/:id' element={<EditProduct/>}/>
</Routes>
















    
    
    </>
  )
}

