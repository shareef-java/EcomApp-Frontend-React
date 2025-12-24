import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
  let [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8087/")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        alert(error.message);  
      });
  }, []);
  function delProduct(id){
    axios.delete(`http://localhost:8087/delproduct/${id}`)
    .then(()=>{
      alert("record deleted successfully...")
    })
    .catch((error)=>{
     alert(error)
    })
  }
  

  return (
    <>
      <p className="h1" style={{textAlign:"center"}}>Products</p>
     
      <div className="container">
        <p className="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quasi molestias quibusdam eaque adipisci, suscipit cum dignissimos expedita necessitatibus, minus autem totam illo! Possimus harum ex mollitia alias corporis non sed nam labore temporibus cumque tempore autem, aperiam nihil impedit!</p>
        <Link to='/add' className='btn btn-sm btn-primary'>Add</Link>
     <div className="card">
        <div className="card-body">
             <table className='table table-bordered table-striped table-hover text-center'>
                        <thead className='text-white bg-primary text-center'>
                            <tr>
                                <th><b>Product ID</b></th>
                                <th><b>Name</b></th>
                                <th><b>Image</b></th>
                                <th><b>Price</b></th>
                                <th><b>Qty</b></th>
                                <th><b>Total</b></th>
                                <th><b>Operations</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.length>0?
                                product.map((prod)=>{
                                    return(
                                        <tr>
                                            <td><h6>{prod.pid}</h6></td>
                                            <td><h6>{prod.pname}</h6></td>
                                            <td><img src={prod.pimage} className='img-fluid' width={100} alt='image loading...'/></td>
                                            <td><h6>&#8377;{Number(prod.pprice).toFixed(2)}</h6></td>
                                            <td><h6>{prod.pqty}</h6></td>
                                            <td><h6>&#8377;{Number(prod.pprice*prod.pqty).toFixed(2)}</h6></td>
                                            <td><Link to={`/product/${prod.pid}`}>
    <i className='fa fa-eye fa-2x text-success mr-2 blink'></i>
  </Link><Link to={`/edit/${prod.pid}`}><i className='fa fa-pen fa-2x text-primary mr-2'></i></Link><Link to='' onClick={()=>{
                                              delProduct(prod.pid)
                                            }}><i className='fa fa-trash fa-2x text-danger'></i></Link></td>
                                        </tr>
                                    )
                                    
                                }):<tr>
    <td colSpan={999}>Data not available</td>
  </tr>

                                
                            }
                        </tbody>
                        </table>
        </div>
     </div>
    
     </div>
     
</>
  )
}
