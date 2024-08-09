import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Userdetails() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [getUser, setGetUser] = useState([])
    const [input_data, setInput_data]=useState({
        name:'',
        address:'',
        mobile_no:'',
        user_type:'',
        email:'',
        password:''
    })

    let setData=(e)=>{
        setInput_data({...input_data, [e.target.name]: e.target.value})
    }

    let saveData=(e)=>{
        e.preventDefault()
        
        axios.post('http://localhost:3000/user', input_data)
        .then(()=>
            { 
                alert("Sucessfully Save")
                getAllUser()
            })
    }

    useEffect(() => {
        getAllUser()
    }, [input_data])
    
    let getAllUser = () => {
        axios.get('http://localhost:3000/user')
            .then((res) => {
                //setGetUser(res)
                setGetUser(res.data)
            })
    }




    return (
        <>
            <div className='container'>

                <div className="row py-2">
                    <div className="col-11"><h2>USER DETAILS</h2></div>
                    <div className="col btn btn-primary" onClick={handleShow}>ADD</div>
                </div>
                <div className="row bg-primary py-2 text-white">
                    <div className="col-1">ID</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Email</div>
                    <div className="col-2">Address</div>
                    <div className="col-2">Mobile No</div>
                    <div className="col-1">User Type</div>
                    <div className="col-2">Action</div>
                </div>
                {getUser.map((gu) =>
                    <div className="row py-2 border-bottom">
                        <div className="col-1">{gu.id}</div>
                        <div className="col-2">{gu.name}</div>
                        <div className="col-2">{gu.email}</div>
                        <div className="col-2">{gu.address}</div>
                        <div className="col-2">{gu.mobile_no}</div>
                        <div className="col-1">{gu.user_type}</div>
                        <div className="col-2">
                            <button className='btn btn-primary'>EDIT</button>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                )}

            </div>









            
            <Modal show={show} onHide={handleClose}>
            <form onSubmit={saveData}>
                <Modal.Header closeButton>
                    <Modal.Title>User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                        <div className="form-group py-2">
                            <label htmlFor="exampleInputEmail1">User Name</label>
                            <input type="text" className="form-control" id="username" name="name" placeholder="Enter user name" onChange={setData} />
                        </div>

                        <div className="form-group py-2 ">
                            <label htmlFor="exampleInputEmail1">Address</label>
                            <input type="text" className="form-control" id="address" name="address" placeholder="Enter Address" onChange={setData} />
                        </div>

                        <div className="form-group py-2">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email"  onChange={setData}/>
                        </div>

                        <div className="form-group py-2">
                            <label htmlFor="exampleInputEmail1">Mobile No</label>
                            <input type="number" className="form-control" id="mobile_no" name="mobile_no" placeholder="Enter Moible" onChange={setData}/>
                        </div>

                        <div className="form-group py-2">
                            <label htmlFor="exampleInputEmail1">User Type</label>
                            <input type="text" className="form-control" id="user_type" name="user_type" placeholder="Enter User Type" onChange={setData}/>
                        </div>

                        <div className="form-group py-2">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <input type="password" className="form-control" id="password" name="user_type" placeholder="Enter Password" onChange={setData}/>
                        </div>





                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <input type="text" variant="primary" value ='Save Changes' className='btn btn-primary'/> */}
                    <input type="submit" className='btn btn-primary' value ='Save Changes' />
                        
                   
                </Modal.Footer>
                </form>
        </Modal >
      








        </>
    )
}

export default Userdetails 