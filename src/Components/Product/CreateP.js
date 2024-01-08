import React, { Fragment, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Admin from "../Home/Admin";

 
const CreateProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

 {/*
  const [data, setData] = useState({
    Title: '',
    Description: '',
    ISBN: '',
    Author: '',
    ListPrice: 0,
    Price: 0,
    Price50: 0,
    Price100: 0,
    Category: '',
    ImageUrl: '',
  });   */}

  const [data, setData] = useState('');

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
 
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:5145/api/NewProduct`)
        .then((result) => {
            setData(result.data)
        })
        .catch((error) => {
            console.log(error)
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
}

const handleSave =() =>
{
    const url = `http://localhost:5145/api/NewProduct`;
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
        getData();
        clear();
        navigate('/Product/Index');
        toast.success('Product has been added successfully');
    }).catch((error)=>{
        toast.error(error);
    })
}

  const [additionalData, setAdditionalData] = useState([]);
    // Function to fetch data from the second API endpoint
    useEffect(() => {
        axios.get(`http://localhost:5145/api/NewProduct`)
            .then((result) => {
                setAdditionalData(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
  
 
  return (
    <Fragment>
      <Admin />
      
    <div className="card shadow border-0 my-4 m-4" style={{width:"50%", left: "25%"}}>
    <ToastContainer />
      <div className="card-header bg-secondary bg-gradient mt-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white py-2">Create Product</h2>
          </div>
        </div>
      </div>
      <div className="card-body p-4" >
        <form method="post" onSubmit={handleSubmit} className="row" encType="multipart/form-data">
          <div className="col-12">
            <div className="border p-3">
              <div className="form-floating py-2 col-12">
                <input type="text" placeholder='enter title' className="form-control border-0 shadow" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Title</label>
              </div>
              <div className="form-floating py-2 col-12">
                <textarea name="Description"  className="form-control border-0 shadow" placeholder='description'
                value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                <label>Description</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input type="text" name="ISBN" className="form-control border-0 shadow" placeholder='enter ISBN' value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                <label>ISBN</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input type="text" name="Author" className="form-control border-0 shadow" 
                  value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <label>Author</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="number"
                  name="ListPrice"
                  value={listPrice} onChange={(e) => setListPrice(e.target.value)}
                  className="form-control border-0 shadow"
                />
                <label>List Price</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="number"
                  name="Price"
                  value={price} onChange={(e) => setPrice(e.target.value)}
                  className="form-control border-0 shadow"
                />
                <label>Price</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="number"
                  name="Price50"
                  value={price50} onChange={(e) => setPrice50(e.target.value)}
                  className="form-control border-0 shadow"
                />
                <label>Price 50</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="number"
                  name="Price100"
                  value={price100} onChange={(e) => setPrice100(e.target.value)}
                  className="form-control border-0 shadow"
                />
                <label>Price 100</label>
              </div>
              <div className="form-floating py-2 col-12">

              <select type="select"
                                name="select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                // className={`form-control ${errors.select ? 'is-invalid' : ''}`}
                                className='form-control'
                                >
                                <option selected>--Select Category--</option>
                                <option >Action</option>
                                <option >Sci-Fi</option>
                                <option >History</option>
                            </select>
                        {/*     <label asp-for="Product.CategoryId" className="ms-2"></label> */}


          {/*    {additionalData.length > 0 ? (
                        <select
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">--Select Category--</option>
                            {additionalData.map((item) => (
                                <option key={item.id} value={item.category}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Category"
                            value={category} // Use a separate state for custom category input
                            onChange={(e) => setCategory(e.target.value)} // Update the separate state
                            required
                        />
                    )}  */}

              </div>
              
              <div className="form-floating py-2 col-12">
                <input
                  type="file"
                  name="file"
                  value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                  className="form-control border-0 shadow" multiple
                />
                  <label>Product Image</label>  
              </div>  
              
              <div className="row pt-2">
                <div className="col-6 col-md-3">
                  <button type="submit" className="btn btn-primary form-control" onClick={()=> handleSave()}>
                    Create
                  </button>
                </div>
                <div className="col-6 col-md-3">
                  <a href="/Product/Index" className="btn btn-outline-primary border form-control">
                    Back to List
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Fragment>
  );
};
 
export default CreateProduct;