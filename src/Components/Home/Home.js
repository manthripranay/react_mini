import React, { Fragment, useEffect, useState } from "react";
import Product from '../Product/Product';
import ReactDOM from "react-dom";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar";



function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
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

    return (
        <Fragment>
            <Navbar />
            <div class="row pb-3 m-4">
                {
                    data && data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <div class="col-lg-3 col-sm-6">
                                    <div class="row p-2">
                                        <div class="col-12 p-1">
                                            <div class="card border-0 p-3 shadow  border-top border-5 rounded">
                                                {/* @if(product.ProductImages!=null && product.ProductImages.Count()) */}
                                                
                                                <img src={(item.imageUrl.split("fakepath"))[1]} class="card-img-top rounded" />

                                                {/*<img src={item.imageUrl} class="card-img-top rounded" /> */}

                                                {/* else {
                                                <img src="https://placehold.co/500x600/png" class="card-img-top rounded" />
                                            } */}

                                                <div class="card-body pb-0">
                                                    <div class="pl-1">
                                                        <p class="card-title h5 text-dark opacity-75 text-uppercase text-center">{item.title}</p>
                                                        <p class="card-title text-warning text-center">by <b>{item.author}</b></p>
                                                    </div>
                                                    <div class="pl-1">
                                                        <p class="text-dark text-opacity-75 text-center mb-0">
                                                            List Price:
                                                            <span class="text-decoration-line-through">
                                                                <i class="fa fa-inr"></i> {item.listPrice}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div class="pl-1">
                                                        <p class="text-dark text-opacity-75 text-center">As low as :
                                                            <span>
                                                                <i class="fa fa-inr"></i> {item.price100}
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                <Link to={`/home/details/${item.id}`} class="btn btn-primary bg-gradient border-0 form-control" >Details</Link>
                                                    {/* <a href="/home/details" 
                                                        class="btn btn-primary bg-gradient border-0 form-control">
                                                        Details
                                                    </a> */}
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
            </div>
        </Fragment>
    );
}

export default Home;
