import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Userdetails() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                <div className="row py-2 border-bottom">
                    <div className="col-1">1</div>
                    <div className="col-2">Prabhat</div>                   
                    <div className="col-2">Email</div>
                    <div className="col-2">Kathmandu</div>
                    <div className="col-2">985412014</div>
                    <div className="col-1">Super User</div>
                    <div className="col-2">
                        <button className='btn btn-primary'>EDIT</button>
                        <button className='btn btn-danger'>Delete</button>
                    </div>
                </div>

                <div className="row py-2 border-bottom">
                    <div className="col-1">1</div>
                    <div className="col-2">Prabhat</div>
                    <div className="col-2">prabhat@gmail.com</div>
                    <div className="col-2">Kathmandu</div>
                    <div className="col-2">985412014</div>
                    <div className="col-1">Super User</div>
                    <div className="col-2">
                        <button className='btn btn-primary'>EDIT</button>
                        <button className='btn btn-danger'>Delete</button>
                    </div>
                </div>

                <div className="row py-2 border-bottom">
                    <div className="col-1">1</div>
                    <div className="col-2">Prabhat</div>
                    <div className="col-2">mukesh@gmail.com</div>
                    <div className="col-2">Kathmandu</div>
                    <div className="col-2">985412014</div>
                    <div className="col-1">Super User</div>
                    <div className="col-2">
                        <button className='btn btn-primary'>EDIT</button>
                        <button className='btn btn-danger'>Delete</button>
                    </div>
                </div>
            </div>








           

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            




         


        </>
    )
}

export default Userdetails