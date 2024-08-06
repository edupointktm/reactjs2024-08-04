import React from 'react'
import { useParams } from 'react-router-dom'
import Student from '../data/Student'
function Student_details() {
    let {sid} = useParams()

    let getStduent = Student.find((d)=>d.id==sid)

  return (
   <>
    <div className='container'>
        <h2> STUDENT DETAILS - {sid}</h2>
        <hr/>

    </div>
    <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <img src={getStduent.image}></img>
            </div>
            <div className='col'>
                <h4> Student Name : {getStduent.names} </h4>
            </div>
        </div>
        
    </div>

   </>
  )
}

export default Student_details