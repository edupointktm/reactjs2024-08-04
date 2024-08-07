import React, { useEffect, useState } from 'react'

function Hooke() {
    let [count, setCount]=useState(10)

    let decreament =()=>{
        setCount(count-1)
    }
useEffect(()=>{
    console.log("Welcome "+count)
    //data load
},[])
   
  return (
    <>
    <div className='container'>
        <h2> Exmaple of UseState</h2>
        <br/>
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}>+</button>
        <h4> {count}</h4>
        <button className='btn btn-danger' onClick={()=>decreament()}>-</button>
       
    </div>
    </>
  )
}

export default Hooke





