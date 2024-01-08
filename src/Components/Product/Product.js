
import React, { Fragment, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Admin from "../Home/Admin";

const ProductList = () => {    
{/*
function ProductList () {       */}
    const booksdata = [
        {
            Id : 1,
            Title : "Fortune of Time",
            Author : "Billy Spark",
            Description : "Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies.\r\n\r\nNunc malesuada viverra ipsum sit amet tincidunt. ",
            ISBN : "SWD9999001",
            ListPrice : 99,
            Price : 90,
            Price50 : 85,
            Price100 : 80,
            CategoryId : 1,
            imageurl : "fortune of time.jpg"
        }]

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isbn, setIsbn] = useState('');
    const [price, setPrice] = useState('');
    const [listPrice, setListPrice] = useState('');
    const [price50, setPrice50] = useState('');
    const [price100, setPrice100] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [editTitle, setEditTitle] = useState('');
    const [editId, setEditId] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [editIsbn, setEditIsbn] = useState('');
    const [editPrice, setEditPrice] = useState('');
    const [editListPrice, setEditListPrice] = useState('');
    const [editPrice50, setEditPrice50] = useState('');
    const [editPrice100, setEditPrice100] = useState('');
    const [editAuthor, setEditAuthor] = useState('');
    const [editCategory, setEditCategory] = useState('');
    const [editImageUrl, setEditImageUrl] = useState('');

    const [data, setData] = useState([]);

    useEffect(() => {
        //setData(booksdata);
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:5145/api/NewProduct')
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleEdit =(id) =>{
        handleShow();
        axios.get(`http://localhost:5145/api/NewProduct/${id}`)
        .then((result) => {
            setEditTitle(result.data.title);
            setEditDescription(result.data.description);
            setEditIsbn(result.data.isbn);
            setEditAuthor(result.data.author);
            setEditPrice(result.data.price);
            setEditListPrice(result.data.listPrice);
            setEditPrice100(result.data.price100);
            setEditPrice50(result.data.price50);
            setEditCategory(result.data.category);
            setEditId(id);
        })
        .catch((error) => {
        console.log(error)
        })
    }
 
    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this Product") === true)
        {
           axios.delete(`http://localhost:5145/api/NewProduct/${id}`)
           .then((result)=>{
            if(result.status === 200)
            {
                toast.success('Product has been deleted successfully');
                getData();
            }
           })
           .catch((error)=>{
            toast.error(error);
           })
        }
    }
 
    const handleUpdate =() =>{
     const url = `http://localhost:5145/api/NewProduct/${editId}`;
     const data = 
     {
        "id": editId,
        "title": editTitle,
        "description": editDescription,
        "isbn": editIsbn,
        "listPrice": editListPrice,
        "author": editAuthor,
        "price": editPrice,
        "price50": editPrice50,
        "price100": editPrice100,
        "category": editCategory,
        "imageUrl": editImageUrl
     }
     axios.put(url, data)
     .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success('Product has been updated successfully');
     }).catch((error)=>{
        toast.error(error);
     })
    }

    const handleSave =() =>
    {
        const url = 'http://localhost:5145/api/NewProduct';
        const data = {
            "title": title,
            "description": description,
            "isbn": isbn,
            "listPrice": listPrice,
            "author": author,
            "price": price,
            "price50": price50,
            "price100": price100,
            "category": category,
            "imageUrl": imageUrl
        }
        axios.post(url, data)
        .then((result) =>{
            navigate('/Product');
            getData();
            clear();
            toast.success('Product has been added successfully');
        }).catch((error)=>{
            toast.error(error);
        })
    }
 
    const clear = () =>{
        setTitle('');
        setDescription('');
        setAuthor('');
        setPrice('');
        setListPrice('');
        setPrice100('');
        setPrice50('');
        setCategory('');
        setIsbn('');
        setImageUrl('');

        setEditTitle('');
        setEditDescription('');
        setEditAuthor('');
        setEditPrice('');
        setEditPrice100('');
        setEditListPrice('');
        setEditPrice50('');
        setEditCategory('');
        setEditIsbn('');
        setEditImageUrl('');
        setEditId('');
    }

    return (
        <Fragment>
            <Admin />
            <ToastContainer />
            <div>
            <div className="card shadow border-0 mt-4  mx-4">
                <div className="card-header bg-secondary bg-gradient mt-0 py-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-white py-2">Product List</h2>
                        </div>
                    </div>
                </div>
                <div className="card-body p-4">
                    <div className="row pb-2">
                        <div className="col-6"></div>
                        <div className="col-6 text-end">
                            {/* Adjust the route based on your React Router configuration */}
                            <a href="/product/create" className="btn btn-primary">
                                <i className="bi bi-plus-circle"></i> Create New Product
                            </a>
                        </div>
                    </div>

                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>ISBN</th>
                                <th>Price</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data && data.length>0 ?
                            data.map((item ,index) => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.isbn}</td>
                                        <td>{item.price}</td>
                                        <td>{item.author}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            <div className="w-75 btn-group" role="group">

                                                <a className='btn btn-primary mx-2' onClick={() => handleEdit(item.id)} >
                                                    <i className="bi bi-pencil-square"></i>Edit
                                                </a>
                                                <a className='btn btn-danger mx-2' onClick={() => handleDelete(item.id)} >
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
                        </tbody >
                    </table >

                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update Product</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="card-body p-4" >
                                    <form  className="row">
                                        <div className="border p-3">
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter title"
                                                value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                                                <label htmlFor="Name" className="ms-2">Title</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter description"
                                                value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                                                <label htmlFor="Name" className="ms-2">Description</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter title"
                                                value={editIsbn} onChange={(e) => setEditIsbn(e.target.value)}/>
                                                <label htmlFor="Name" className="ms-2">ISBN</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter author Name"
                                                value={editAuthor} onChange={(e) => setEditAuthor(e.target.value)}/>
                                                <label htmlFor="Name" className="ms-2">Author</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter list price "
                                                value={editListPrice} onChange={(e) => setEditListPrice(e.target.value)} />
                                                <label htmlFor="name" className="ms-2">List Price</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter list price "
                                                value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                                                <label htmlFor="name" className="ms-2">Price</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter list price "
                                                value={editPrice50} onChange={(e) => setEditPrice50(e.target.value)} />
                                                <label htmlFor="name" className="ms-2">Price for 50+</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter price "
                                                value={editPrice100} onChange={(e) => setEditPrice100(e.target.value)} />
                                                <label htmlFor="name" className="ms-2">Price for 100+</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input type="text" className="form-control border-0 shadow" placeholder="Enter category "
                                                value={editCategory} onChange={(e) => setEditCategory(e.target.value)} />
                                                <label htmlFor="name" className="ms-2">Category</label>
                                                <span className="text-danger"></span>
                                            </div>
                                            <div className="form-floating py-2 col-12">
                                                <input
                                                type="file"
                                                name="file"
                                                value={editImageUrl} onChange={(e) => setEditImageUrl(e.target.value)} 
                                                className="form-control border-0 shadow" multiple />
                                                <label>Image</label>
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
};

export default ProductList;