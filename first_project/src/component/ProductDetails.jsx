import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    let [product, setProduct]=useState([])
    let {pid}=useParams()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+pid)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    },)
  return (
    <>
        <div className='container'>
        <h2> PRODUCT DETAILS - {pid}</h2>
        <hr/>

    </div>
    
    <div className='container'>
        <div className='row'>
            <div className='col-7'>
                <img src={product.image}/>
            </div>
            <div className='col'>
                <h4> {product.title}  </h4>
            </div>
        </div>
        
    </div>

   </>
    
  )
}

export default ProductDetails