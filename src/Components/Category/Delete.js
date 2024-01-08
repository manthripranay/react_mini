
import React from 'react';
import Index from './Index';
import Admin from "../Home/Admin";
 
const Delete = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure to delete") == true)
    {
        alert(id);
    }
}
 
  return (
    <div className="card shadow border-0 mt-4 m-4">
      <Admin />
      <div className="card-header bg-secondary bg-gradient mt-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white py-2">Delete Category</h2>
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit} className="row">

        
          <div className="brder p-3">
            {/* Uncomment the following line if you want to include validation summary */}
            {/* <div asp-validation-summary="ModelOnly"></div> */}
            <div className="form-floating py-2 col-12">
              <input type="text" disabled className="form-control border-0 shadow" id="Name" name="Name" />
              <label htmlFor="Name" className="ms-2">Name</label>
              {/* Add your validation message */}
              <span className="text-danger"></span>
            </div>
            <div className="form-floating py-2 col-12">
              <input type="text" disabled className="form-control border-0 shadow" id="DisplayOrder" name="DisplayOrder" />
              <label htmlFor="DisplayOrder" className="ms-2">Display Order</label>
              {/* Add your validation message */}
              <span className="text-danger"></span>
            </div>
            <div className="row pt-2">
              <div className="col-6 col-md-3">
                <button type="submit" className="btn btn-primary form-control">Delete</button>
              </div>
              <div className="col-6 col-md-3">
                {/* Adjust the route based on your React Router configuration */}
                <a href="/category/index" className="btn btn-outline-primary border form-control">Back to List</a>
              </div>
            </div>
          </div>
        
        </form>
      </div>
    </div>
  );
};
 
export default Delete;