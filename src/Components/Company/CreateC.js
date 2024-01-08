import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Admin from "../Home/Admin";

const CreateCompany = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(`http://localhost:5145/api/Company`)
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error)
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
                navigate('/company/index');
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
        }

    return (
        <Fragment>
            <Admin />
            <ToastContainer />
            <div className="card shadow border-0 my-4 m-4" style={{ width: "50%", left: "25%" }}>
                <div className="card-header bg-secondary bg-gradient mt-0 py-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-white py-2">Create Company</h2>
                        </div>
                    </div>
                </div>
                <div className="card-body p-4">
                    <form className="row">
                        <div className="border p-3">
                            <div className="form-floating py-2 col-12">
                                <input type="text" className="form-control border-0 shadow" placeholder="Enter Name"
                                    value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="Name" className="ms-2">Name</label>
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-floating py-2 col-12">
                                <input type="text" className="form-control border-0 shadow" placeholder="Enter Street Address"
                                    value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
                                <label htmlFor="Street Address" className="ms-2">Street Address</label>
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-floating py-2 col-12">
                                <input type="text" className="form-control border-0 shadow" placeholder="Enter City"
                                    value={city} onChange={(e) => setCity(e.target.value)} />
                                <label htmlFor="City" className="ms-2">City</label>
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-floating py-2 col-12">
                                <input type="text" className="form-control border-0 shadow" placeholder="Enter state"
                                    value={state} onChange={(e) => setState(e.target.value)} />
                                <label htmlFor="state" className="ms-2">state</label>
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-floating py-2 col-12">
                                <input type="text" className="form-control border-0 shadow" placeholder="Enter postalCode"
                                    value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                                <label htmlFor="postalCode" className="ms-2">Postal Code</label>
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-floating py-2 col-12">
                                <input type="text" className="form-control border-0 shadow" placeholder="Enter phoneNumber"
                                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                <label htmlFor="phoneNumber" className="ms-2">Phone Number</label>
                                <span className="text-danger"></span>
                            </div>

                            <div className="row pt-2">
                                <div className="col-6 col-md-3">
                                    <button type="submit" className="btn btn-primary form-control" onClick={() => handleSave()}>
                                        Create
                                    </button>
                                </div>
                                <div className="col-6 col-md-3">
                                    <a href="/company/index" className="btn btn-outline-primary border form-control">
                                        Back to List
                                    </a>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </Fragment>

    );
}

export default CreateCompany;