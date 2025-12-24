import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function EditProduct() {
  let navigate=useNavigate();
  let {id}=useParams();
  let[product,setProduct]=useState({
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
function Save(event){
  event.preventDefault();
  axios.put(`http://localhost:8087/editproduct/${id}`,product)
  .then(()=>{
    alert("details updated")
    navigate("/")
  })
  .catch((error)=>{
     alert(error)
  },[id])
}

  return (
   <>
  

<p className="h1" style={{textAlign:"center"}}>Edit Product:{id}</p>
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header text-white bg-success">
          <p className="h4">Edit product Details</p>
        </div>
        <div className="card-body">
          <form action="" onSubmit={Save}>
            <div className="form-group">
              <input type="number" name='pid' min={111} required value={product.pid} className='form-control' onChange={updateInput} placeholder='Product Id'/>
            </div>
             <div className="form-group">
              <input type="text" name='pname' value={product.pname} required  className='form-control' onChange={updateInput} placeholder='Product Name'/>
            </div>
             <div className="form-group">
              <input type="text" name='pimage' value={product.pimage} required className='form-control' onChange={updateInput} placeholder='Image Link'/>
            </div>
             <div className="form-group">
              <input type="number" name='pqty' min={0}  required value={product.pqty} className='form-control' onChange={updateInput} placeholder='Product Qty'/>
            </div>
             <div className="form-group">
              <input type="number" name='pprice' min={100} required value={product.pprice} className='form-control' onChange={updateInput} placeholder='Product Price'/>
            </div>
            <button className='btn btn-sm bg-success'>Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


   </>
  )
}
