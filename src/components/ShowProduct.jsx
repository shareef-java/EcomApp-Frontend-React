import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function ShowProduct() {
  let {id}=useParams();
  let [product,setProduct]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8087/product/${id}`)
    .then((res)=>{
      setProduct(res.data)

    })
    .catch((error)=>{
      alert(error)
    })
  })
  return (
    <>
    <p className="h4" style={{textAlign:"center"}}>Product Info:{id}</p>
    
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="card ">
            <div className="card-header bg-primary text-white ">
             <p className="h4">Product Info</p>
            </div>
            <div className="card-body">
              <ul className='list-group'>
                <li className='list-group-item align-items-center'>
                  <img src={product.pimage} width={100} height={100} className='align-items-center' />

                </li>
                <li className='list-group-item'>
                  
                  <b>Product id:{product.pid}</b>

                </li>
                <li className='list-group-item'>
                  
                  <b>Product Name:{product.pname}</b>

                </li>
                <li className='list-group-item'>
                  
                  <b>Product qty:{product.pqty}</b>

                </li>
                <li className='list-group-item'>
                  
                  <b>Product Price:{product.pprice}</b>

                </li>

              </ul>
              <Link to='/' className='btn btn-sm btn-danger'>Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
