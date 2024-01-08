
import React, { Fragment, useEffect, useState } from "react";
import Index from "./Index";
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import Admin from "../Home/Admin";
 
const CreateCategory = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const [name, setName] = useState('');
  const [displayOrder, setDisplayOrder] = useState('');

  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
        navigate('/category/index');
        toast.success('Category has been added successfully');
    }).catch((error)=>{
        toast.error(error);
    })
}

const clear = () =>{
    setName('');
    setDisplayOrder('');
}

  return (
    <Fragment>
      <Admin />
      <ToastContainer />

    <div className="card shadow border-0 mt-4 m-4" style={{width:"60%", left: "18%"}}>
      
      <div className="card-header bg-secondary bg-gradient mt-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white py-2">Create Category</h2>
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit} className="row" >
          <div className="border p-3">
            {/* Uncomment the following line if you want to include validation summary */}
            {/* <div asp-validation-summary="ModelOnly"></div> */}
            <div className="form-floating py-2 col-md-10">
              <input type="text" className="form-control border-0 shadow" 
              value={name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor="Name" className="ms-2">Name</label>
              {/* Add your validation message */}
              <span className="text-danger"></span>
            </div>
            <div className="form-floating py-2 col-md-10" >
              <input type="text" className="form-control border-0 shadow" 
              value={displayOrder} onChange={(e) => setDisplayOrder(e.target.value)}  />
              <label htmlFor="DisplayOrder" className="ms-2">Display Order</label>
              {/* Add your validation message */}
              <span className="text-danger"></span>
            </div>
            <div className="row pt-2">
              <div className="col-6 col-md-2">
                <button type="submit" className="btn btn-primary form-control" style={{width: "120px"}} onClick={()=> handleSave()}>Create</button>
              </div>
              <div className="col-6 col-md-2">
                <a href="/category/index" className="btn btn-outline-primary border form-control" style={{width: "120px"}}>Back to List</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Fragment>
  );
};
 
export default CreateCategory;