import React from 'react'

let eventHandling = (name)=>{
    alert("My Name is "+name)
}

function Event_handling() {
  return (
    <>
        <div className="container">
                <h1> Event Handling</h1>
                <br/>
                <button onClick={()=>eventHandling("Prabhat Kumar")}> Click Me </button>
               
        </div>
    </>
  )
}

export default Event_handling