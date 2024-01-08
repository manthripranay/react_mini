
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from "../Home/Admin";

const EditCategory = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const [name, setName] = useState('');
  const [displayOrder, setDisplayOrder] = useState('');

  const [editName, setEditName] = useState('');
  const [editDisplayOrder, setEditDisplayOrder] = useState('');
  const [editId, setEditId] = useState('');
  const [data, setData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5145/api/Category/${id}`)
      .then((result) => {
        const { name, displayOrder} = result.data;
        setName(name);
        setDisplayOrder(displayOrder);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
 
  useEffect(() => {
    getData();
  }, [])

  const getData = ()=>{
    axios.get(`http://localhost:5145/api/Category`)
    .then((result)=>{
      setData(result.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  const handleUpdate =() =>{
    const url = `http://localhost:5145/api/Category/${id}`;
    const data = {
       "id": id,
       "name": name,
       "displayOrder" : displayOrder
    }
    axios.put(url, data)
    .then((result) => {
       //getData();
       //clear();
       navigate('/category');
       toast.success('Category has been updated successfully');
    }).catch((error)=>{
       toast.error(error);
    })
   }

  return (
    <div className="card shadow border-0 mt-4 m-4">
      <Admin />
      <div className="card-header bg-secondary bg-gradient mt-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white py-2">Edit Category</h2>
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        <form className="row" >
          <div className="border p-3">
            
            <div className="form-floating py-2 col-12">
              <input type="text" className="form-control border-0 shadow" placeholder="Enter Name"
              value={editName} onChange={(e) => setName(e.target.value)} />
              <label htmlFor="Name" className="ms-2" >Name</label>
              <span className="text-danger"></span>
            </div>
            <div className="form-floating py-2 col-12">
              <input type="text" className="form-control border-0 shadow" placeholder="Enter Display Order"
              value={editDisplayOrder} onChange={(e) => setDisplayOrder(e.target.value)}/>
              <label htmlFor="DisplayOrder" className="ms-2">Display Order</label>
              {/* Add your validation message */}
              <span className="text-danger"></span>
            </div>
            <div className="row pt-2">
              <div className="col-6 col-md-3">
                <button type="submit" className="btn btn-primary form-control" onClick={handleUpdate}>Update</button>
              </div>
              <div className="col-6 col-md-3">  
                <a href="/category/index" className="btn btn-outline-primary border form-control">Back to List</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;