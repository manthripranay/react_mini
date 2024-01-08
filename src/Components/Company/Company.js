import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Admin from "../Home/Admin";

const Company = () => {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const [editId, setEditId] = useState('');
    const [editName, setEditName] = useState('');
    const [editStreetAddress, setEditStreetAddress] = useState('');
    const [editCity, setEditCity] = useState('');
    const [editState, setEditState] = useState('');
    const [editPostalCode, setEditPostalCode] = useState('');
    const [editPhoneNumber, setEditPhoneNumber] = useState('');

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = ()=>{
        axios.get(`http://localhost:5145/api/Company`)
        .then((result)=>{
          setData(result.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    }

    const handleEdit =(id) =>{
        handleShow();

        axios.get(`http://localhost:5145/api/Company/${id}`)
        .then((result) => {
            setEditName(result.data.name);
            setEditStreetAddress(result.data.streetAddress);
            setEditCity(result.data.city);
            setEditState(result.data.state);
            setEditPostalCode(result.data.postalCode);
            setEditPhoneNumber(result.data.phoneNumber);
            setEditId(id);
        })
        .catch((error) => {
        console.log(error)
        })
    }

    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this Company") == true)
        {
           axios.delete(`http://localhost:5145/api/Company/${id}`)
           .then((result)=>{
            if(result.status === 200)
            {
                toast.success('Company has been deleted successfully');
                getData();
            }
           })
           .catch((error)=>{
            toast.error(error);
           })
        }
    }

    const handleUpdate =() =>{
        const url = `http://localhost:5145/api/Company/${editId}`;
        const data = {
           "id": editId,
           "name": editName,
            "streetAddress": editStreetAddress,
            "city": editCity,
            "state": editState,
            "postalCode": editPostalCode,
            "phoneNumber": editPhoneNumber
        }
        axios.put(url, data)
        .then((result) => {
           handleClose();
           getData();
           clear();
           toast.success('Company has been updated successfully');
        }).catch((error)=>{
           toast.error(error);
        })
       }

    const handleSave =() =>{
    const url = 'http://localhost:5145/api/Company';
    const data = {
            "name": name,
            "streetAddress": streetAddress,
            "city": city,
            "state": state,
            "postalCode": postalCode,
            "phoneNumber": phoneNumber
        }
        axios.post(url, data)
        .then((result) =>{
            getData();
            clear();
            toast.success('Company has been added successfully');
        }).catch((error)=>{
            toast.error(error);
        })
    }
    const clear = () =>{
        setName('');
        setCity('');
        setStreetAddress('');
        setState('');
        setPhoneNumber('');
        setPostalCode('');

        setEditName('');
        setEditStreetAddress('');
        setEditCity('');
        setEditState('');
        setEditPhoneNumber('');
        setEditPostalCode('');
        setEditId('');
    }

    return (
        <Fragment>
            <Admin />
            <ToastContainer />
            <div className="card shadow border-0 my-4 m-4">
                <div className="card-header bg-secondary bg-gradient ml-0 py-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-white py-2">Company List</h2>
                        </div>
                    </div>
                </div>
                <div className="card-body p-4">
                    <div className="row pb-3">
                        <div className="col-6">
                        </div>
                        <div className="col-6 text-end">
                            <a className="btn btn-primary" href="/company/create">
                                <i className="bi bi-plus-circle"></i>  Create New Company
                            </a>
                        </div>
                    </div>

                    <table id="tblData" className="table table-bordered table-striped" style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Phone Number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.length > 0 ?
                                    data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.streetAddress}</td>
                                                <td>{item.city}</td>
                                                <td>{item.state}</td>
                                                <td>{item.phoneNumber}</td>
                                                <td>
                                                    <div className="w-75 btn-group" role="group">
                                                        {/* <Link to={`/category/edit/${item.id}`} className="btn btn-primary" style={{width:"150px"}}>
                                                    Edit</Link> &nbsp;
                                                     */}
                                                        {/*onClick={() => handleEdit(item.id)}*/}

                                                        <a className='btn btn-primary mx-2' onClick={() => handleEdit(item.id)}  >
                                                            <i className="bi bi-pencil-square"></i>Edit
                                                        </a>

                                                        <a className='btn btn-danger mx-2' onClick={() => handleDelete(item.id)}>
                                                            <i className="bi bi-trash3-fill"></i>Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    "loading..."
                            }
                        </tbody>
                    </table>

                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update Company</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="card-body p-4">
                                    <form  className="row">
                                        <div className="border p-3">
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter Name"
                                                value={editName} onChange={(e) => setEditName(e.target.value)}/>
                                                <label htmlFor="Name" className="ms-2">Name</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter Street Address"
                                                value={editStreetAddress} onChange={(e) => setEditStreetAddress(e.target.value)}/>
                                                <label htmlFor="Street Address" className="ms-2">Street Address</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter City"
                                                value={editCity} onChange={(e) => setEditCity(e.target.value)}/>
                                                <label htmlFor="City" className="ms-2">City</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter state"
                                                value={editState} onChange={(e) => setEditState(e.target.value)}/>
                                                <label htmlFor="state" className="ms-2">state</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter postalCode"
                                                value={editPostalCode} onChange={(e) => setEditPostalCode(e.target.value)} />
                                                <label htmlFor="postalCode" className="ms-2">Postal Code</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter phoneNumber"
                                                value={editPhoneNumber} onChange={(e) => setEditPhoneNumber(e.target.value)}/>
                                                <label htmlFor="phoneNumber" className="ms-2">Phone Number</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleUpdate}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                </div>
            </div>

        </Fragment>
    );
}

export default Company;