import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function GetAPIData() {
    let [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data))
    },)


    return (
        <>
            <div className='container'>
                <h2> Get API DATA</h2>
                <hr />
                <div className='container'>
                    <div className='row '>
                        
                        {data.map((d)=>    
                                <div className='col-3 py-2'>
                                    <Link to={`/productdetails/${d.id}`}>
                                    <div className="card">
                                        <div class="img-area">
                                            <img src={d.image} alt="Avatar" />
                                        </div>
                                        <div className="cont">
                                            <h4><b>{d.category}</b></h4>
                                            <p>{d.price}</p>
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

export default GetAPIData