import React, { useEffect, useState } from 'react'

function Hooke() {
  let [count, setCount] = useState(10)

  let decreament = () => {
    setCount(count - 1)
  }
  useEffect(() => {
    console.log("Welcome " + count)
    //data load
  }, [])

  let [userName, setUserName]=useState('')
  let [address, setAddress]=useState('')

  let[getName, setName]=useState('')

  let getUserName=(e)=>{
    setUserName(e.target.value)
  }
  return (
    <>
      <div className='container'>
        <h2> Exmaple of UseState</h2>
        <br />
        <button className='btn btn-primary' onClick={() => setCount(count + 1)}>+</button>
        <h4> {count}</h4>
        <button className='btn btn-danger' onClick={() => decreament()}>-</button>

      </div>
      <hr />
      <div className='container'>
        <div className='row py-3'>
          <div className='col-2'>
            <label htmlFor="">Name :</label>
          </div>
          <div className='col-3'>
            <input type="text" name = 'username' onChange={getUserName}/>
          </div>
          
        </div>
        <div className='row py-3'>
          <div className='col-2'>
            <label htmlFor="">Address :</label>
          </div>
          <div className='col-3'>
            <input type="text" />
          </div>
        </div>
        <hr />
        <button onClick={()=>setName(userName)}> Click Me</button>
        <div className='col-3'>
            <label htmlFor="">Your Name : {getName} </label>
          </div>
      </div>
    </>
  )
}

export default Hooke





