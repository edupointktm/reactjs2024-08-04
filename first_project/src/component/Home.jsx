import React from 'react'
import Student from '../data/Student'
import { Link } from 'react-router-dom'
function Home() {



    return (
        <>
            <div className="container">
                <h1> HOME PAGE</h1>
                <hr />
                <div className='container'>
                    <div className='row '>
                        {Student.map((d) =>

                            
                                <div className='col-3 py-2'>
                                    <Link to={`/student_details/${d.id}`}>
                                    <div className="card">
                                        <div class="img-area">
                                            <img src={d.image} alt="Avatar" />
                                        </div>
                                        <div className="cont">
                                            <h4><b>{d.names}</b></h4>
                                            <p>{d.Faculty}</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                           

                        )}
                    </div>
                </div>




            </div>
        </>
    )
}

export default Home