import React, { useState, useEffect } from 'react';
import Admin from "../Home/Admin";
 
const UpdateProductForm = ({ productId }) => {
  const [product, setProduct] = useState({
    Title: '',
    Description: '',
    ISBN: '',
    Author: '',
    ListPrice: 0,
    Price: 0,
    Price50: 0,
    Price100: 0,
    CategoryId: '',
    ImageUrl: '',
  });
 
  const [file, setFile] = useState(product);
 
  useEffect(() => {
    // Fetch the product details based on the productId
    // You need to implement this based on your API or data source
    // Example: fetchProductDetails(productId).then((data) => setProduct(data));
  }, [productId]);
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
 
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', product, file);
  };
 
  return (
    <div className="card shadow border-0 my-4">
      <Admin />
      <div className="card-header bg-secondary bg-gradient mt-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white py-2">Update Product</h2>
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        <form method="post" className="row" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="col-10">
            <div className="border p-3">
              <div className="form-floating py-2 col-12">
                <input
                  type="text"
                  name="Title"
                  value={product.Title}
                  onChange={handleInputChange}
                  className="form-control border-0 shadow"
                />
                <label>Title</label>
              </div>
              <div className="form-floating py-2 col-12">
                <textarea
                  name="Description"
                  value={product.Description}
                  onChange={handleInputChange}
                  className="form-control border-0 shadow"
                ></textarea>
                <label>Description</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="text"
                  name="ISBN"
                  value={product.ISBN}
                  onChange={handleInputChange}
                  className="form-control border-0 shadow"
                />
                <label>ISBN</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="text"
                  name="Author"
                  value={product.Author}
                  onChange={handleInputChange}
                  className="form-control border-0 shadow"
                />
                <label>Author</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="number"
                  name="ListPrice"
                  value={product.ListPrice}
                  onChange={handleInputChange}
                  className="form-control border-0 shadow"
                />
                <label>List Price</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="number"
                  name="Price"
                  value={product.Price}
                  onChange={handleInputChange}
                  className="form-control border-0 shadow"
                />
                <label>Price</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="number"
                  name="Price50"
                  value={product.Price50}
                  onChange={handleInputChange}
                  className="form-control border-0 shadow"
                />
                <label>Price 50</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="number"
                  name="Price100"
                  value={product.Price100}
                  onChange={handleInputChange}
                  className="form-control border-0 shadow"
                />
                <label>Price 100</label>
              </div>
              <div className="form-floating py-2 col-12">
                <select
                  name="CategoryId"
                  value={product.CategoryId}
                  onChange={handleInputChange}
                  className="form-select border-0 shadow"
                >
                  <option disabled value="">
                    --Select Category--
                  </option>
                  {/* Map and render category options based on your data source */}
                </select>
                <label>Category</label>
              </div>
              <div className="form-floating py-2 col-12">
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="form-control border-0 shadow"
                />
                <label>Image</label>
              </div>
              <div className="row pt-2">
                <div className="col-6 col-md-3">
                  <button type="submit" className="btn btn-primary form-control">
                    Update
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
          <div className="col-2">
            <img src={product.ImageUrl} width="100%" style={{ borderRadius: '5px', border: '1px solid #bbb9b9' }} />
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default UpdateProductForm;