import React, { Fragment, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Admin from "../Home/Admin";
 

const Index = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [displayOrder, setDisplayOrder] = useState('');

    const [editName, setEditName] = useState('');
    const [editId, setEditId] = useState('');
    const [editDisplayOrder, setEditDisplayOrder] = useState('');


    const categorydata = [
        { Id : 1, Name : "Action", DisplayOrder : 1},
        { Id : 2, Name : "SciFi", DisplayOrder : 2 },
        { Id : 3, Name : "History", DisplayOrder : 3 }
    ]

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = ()=>{
        axios.get('http://localhost:5145/api/Category')
        .then((result)=>{
          setData(result.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    }

    const handleEdit =(id) =>{
        handleShow();

        axios.get(`http://localhost:5145/api/Category/${id}`)
        .then((result) => {
            setEditName(result.data.name);
            setEditDisplayOrder(result.data.displayOrder);
            setEditId(id);
        })
        .catch((error) => {
        console.log(error)
        })
    }
 
    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this category") == true)
        {
           axios.delete(`http://localhost:5145/api/Category/${id}`)
           .then((result)=>{
            if(result.status === 200)
            {
                toast.success('Category has been deleted successfully');
                getData();
            }
           })
           .catch((error)=>{
            toast.error(error);
           })
        }
    }
 
    const handleUpdate =() =>{
     const url = `http://localhost:5145/api/Category/${editId}`;
     const data = {
        "id": editId,
        "name": editName,
        "displayOrder" : editDisplayOrder
     }
     axios.put(url, data)
     .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success('Category has been updated successfully');
     }).catch((error)=>{
        toast.error(error);
     })
    }

    const handleSave =() =>{
        const url = 'http://localhost:5145/api/Category';
        const data = {
            "name": name,
            "displayOrder": displayOrder
        }
        axios.post(url, data)
        .then((result) =>{
            getData();
            clear();
            toast.success('Category has been added successfully');
        }).catch((error)=>{
            toast.error(error);
        })
    }
 
    const clear = () =>{
        setName('');
        setDisplayOrder('');
        setEditName('');
        setEditDisplayOrder('');
        setEditId('');
    }
    

    return (
        <Fragment>
            <Admin />
            <div >
            <div className="card shadow border-0 mt-4 m-4" style={{width:"80%", left: "9%"}}>
                <div className="card-header bg-secondary bg-gradient mt-0 py-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-white py-2">Category List</h2>
                        </div>
                    </div>
                </div>
                <div className="card-body p-4">
                    <div className="row pb-2">
                        <div className="col-6"></div>
                        <div className="col-6 text-end">
                            {/* Adjust the route based on your React Router configuration */}
                            <a href="/category/create" className="btn btn-primary">
                                <i className="bi bi-plus-circle"></i> Create New Category
                            </a>
                        </div>
                    </div>

                    <ToastContainer />
                        

                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Display Order</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data && data.length>0 ?
                                data.map((item ,index) => {
                                    return ( 
                                        <tr key={index}>
                                            <td>{item.name}</td> 
                                            <td>{item.displayOrder}</td>
                                            <td>
                                                <div className="w-75 btn-group" role="group">  
                                               {/* <Link to={`/category/edit/${item.id}`} className="btn btn-primary" style={{width:"150px"}}>
                                                    Edit</Link> &nbsp;
                                                     */}
                                                           {/*onClick={() => handleEdit(item.id)}*/}

                                                   <a className='btn btn-primary mx-2'   onClick={() => handleEdit(item.id)}  >
                                                        <i className="bi bi-pencil-square"></i>Edit
                                                    </a>
                                                   
                                                    <a className='btn btn-danger mx-2' onClick={() => handleDelete(item.id)}>
                                                        <i className="bi bi-trash3-fill" ></i>Delete
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
                    </table >
                     
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update Category</Modal.Title>
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
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter Display Order"
                                                value={editDisplayOrder} onChange={(e) => setEditDisplayOrder(e.target.value)} />
                                                <label htmlFor="DisplayOrder" className="ms-2">Display Order</label>
                                                {/* Add your validation message */}
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
                </div >
            </div >
        </div >
        </Fragment>

        
    );
}

export default Index;