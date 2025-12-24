import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

export default function AddProduct() {
  let navigate=useNavigate();
  let [product,setProduct]=useState({
    pid:"",
    pname:"",
    pimage:"",
    pqty:"",
    pprice:""
  })
 function updateInput(event){
  setProduct({
    ...product,
    [event.target.name]:event.target.value

 })
 }
 function save(event){
   event.preventDefault();
   axios.post("http://localhost:8087/saveproduct",product)
   .then(alert("product added successfully"),
  navigate("/"))

     
   .catch((error)=>{
    alert(error)
   })
 }
  return (
   <>
   <p className="h1" >Add Product</p>
   <div className="container">
    <div className="row align-items-center">
      <div className="col-md-5 mt-5">
        <div className="card">
          <div className="card-header bg-primary text-center text-white">
           <p className="h4"> Add Product</p>
          </div>
          <div className="card-body">
           <form action="" onSubmit={save}>
            <div className="form-group">
              <input type="number" min={111} name='pid' required value={product.pid} onChange={updateInput}    placeholder='Product Id' className='form-control' />
            </div>
             <div className="form-group">
              <input type="text"  name='pname' required value={product.pname} onChange={updateInput} placeholder='Product Name' className='form-control' />
            </div>
             <div className="form-group">
              <input type="text" name='pimage' required value={product.pimage} onChange={updateInput} placeholder='Image Link' className='form-control' />
            </div>
             <div className="form-group">
              <input type="number" min={0} name='pqty'  required value={product.pqty} onChange={updateInput} placeholder='Product qty' className='form-control' />
            </div>
             <div className="form-group">
              <input type="number" min={100} name='pprice' required value={product.pprice} onChange={updateInput} placeholder='Product price' className='form-control' />
            </div>
            <button className='btn btn-sm btn-success'>Add</button>
            <Link to='/' className="btn btn-sm btn-danger text-white float-right">Back</Link>
           </form>
          </div>
        </div>

      </div>
    </div>
   </div>
   
   
   </>
  )
}
