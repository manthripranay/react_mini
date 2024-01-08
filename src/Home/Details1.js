import React, { Fragment, useEffect, useState ,useRef} from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';

const ShoppingCartForm = () => {
    const [count, setCount] = useState(1);

    const handleCountChange = (e) => {
        setCount(parseInt(e.target.value, 10) || 1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const successParam = queryParams.get('success');
 
    const [data, setData] = useState([]);
 
const toastShownRef = useRef(false);
 
 
const getData = () => {
    axios
        .get(`http://localhost:5145/api/NewProduct`)
        .then((result) => {
            setData(result.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
 
useEffect(() => {
    getData();
 
    return () => {
        // Clear the toastShown value when the component is unmounted
        localStorage.removeItem('toastShown');
    };
}, []); // Run once on component mount
 
useEffect(() => {
    if (successParam === 'true' && !toastShownRef.current) {
          toastShownRef.current = true;
          localStorage.setItem('toastShown', 'true');
    }
}, [successParam]);
 
const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this product") === true) {
        try {
            await axios.delete(`http://localhost:5145/api/NewProduct/${id}`);
            toast.success("Product has been deleted");
            await getData(); // Wait for data to be updated
        } catch (error) {
            toast.error(error.message);
        }
    }
};


    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <form onSubmit={handleSubmit}>
                {
                    data && data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <div className="card shadow border-0 mt-4 mb-4" style={{ width: "80%", left: "10%" }}>
                                    <div className="card-header bg-secondary bg-gradient text-light py-4">
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <h3 className="text-white text-uppercase">{item.title}</h3>
                                                <p className="text-white-50 fw-semibold mb-0">by {item.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="py-3">
                                            <div className="row">
                                                <div className="col-6 col-md-2 offset-lg-1 pb-1">
                                                    <button type="button" className="btn btn-outline-primary bg-gradient mb-5 fw-semibold btn-sm text-uppercase">
                                                        <small>Back to home</small>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-3 offset-lg-1 text-center mb-3">
                                                    <img src={(item.imageUrl.split("fakepath"))[1]} width="100%" className="rounded" />
                                                </div>
                                                <div className="col-12 col-lg-6 offset-lg-1">
                                                    <div className="col-12 col-md-6 pb-4">
                                                        <span>{item.category}</span>

                                                    </div>
                                                    <div className="row ps-2">
                                                        <h6 className="text-dark text-opacity-50">ISBN: {item.isbn}</h6>
                                                    </div>
                                                    <div className="row ps-2">
                                                        <h6 className="text-dark text-opacity-50 pb-2">
                                                            List Price: <span className="text-decoration-line-through">{item.listPrice.toFixed(2)}</span>
                                                        </h6>
                                                    </div>
                                                    <div className="row text-center ps-2">
                                                        {/* Add your pricing details based on the product object */}
                                                    </div>
                                                    <div className="row pl-2 my-3">Description :
                                                        <p className="text-secondary lh-sm">{item.description}</p>
                                                    </div>
                                                    <div className="row pl-2 mb-3">
                                                        <div className="col-md-4">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text bg-primary text-white border-0 fw-semibold" id="inputGroup-sizing-default">
                                                                    Count
                                                                </span>
                                                                <input
                                                                    type="number"
                                                                    name="Count"
                                                                    value={count}
                                                                    onChange={handleCountChange}
                                                                    className="form-control text-end"
                                                                    aria-label="Sizing example input"
                                                                    aria-describedby="inputGroup-sizing-default"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 col-md-6 pb-1">
                                                            <button type="submit" className="btn btn-primary bg-gradient w-100 py-2 text-uppercase fw-semibold">
                                                                Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        "loading..."
                }

            </form >

        </Fragment>

    );
};

export default ShoppingCartForm;