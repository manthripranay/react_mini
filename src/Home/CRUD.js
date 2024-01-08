import React, { Fragment, useEffect, useState } from "react";

const CRUD = () => {
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
        },
        {
            Id : 2,
            Title : "Dark Skies",
            Author : "Nancy Hoover",
            Description : "Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies.\r\n\r\nNunc malesuada viverra ipsum sit amet tincidunt. ",
            ISBN : "CAW777777701",
            ListPrice : 40,
            Price : 30,
            Price50 : 25,
            Price100 : 20,
            CategoryId : 1,
            imageurl : "dark skies.jpg"
        },
        {
            Id : 3,
            Title : "Vanish in the Sunset",
            Author : "Julian Button",
            Description : "Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies.\r\n\r\nNunc malesuada viverra ipsum sit amet tincidunt. ",
            ISBN : "RITO5555501",
            ListPrice : 55,
            Price : 50,
            Price50 : 40,
            Price100 : 35,
            CategoryId : 1,
            imageurl : "vanish in the sunset.jpg"
        },
        {
            Id : 4,
            Title : "Cotton Candy",
            Author : "Abby Muscles",
            Description : "Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies.\r\n\r\nNunc malesuada viverra ipsum sit amet tincidunt. ",
            ISBN : "WS3333333301",
            ListPrice : 70,
            Price : 65,
            Price50 : 60,
            Price100 : 55,
            CategoryId : 2,
            imageurl : "cotton candy.jpg"
        },
        {
            Id : 5,
            Title : "Rock in the Ocean",
            Author : "Ron Parker",
            Description : "Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies.\r\n\r\nNunc malesuada viverra ipsum sit amet tincidunt. ",
            ISBN : "SOTJ1111111101",
            ListPrice : 30,
            Price : 27,
            Price50 : 25,
            Price100 : 20,
            CategoryId : 2,
            imageurl : "rock in the ocean.jpg"
        },
        {
            Id : 6,
            Title : "Leaves and Wonders",
            Author : "Laura Phantom",
            Description : "Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies.\r\n\r\nNunc malesuada viverra ipsum sit amet tincidunt. ",
            ISBN : "FOT000000001",
            ListPrice : 25,
            Price : 23,
            Price50 : 22,
            Price100 : 20,
            CategoryId : 3,
            imageurl : "leaves and wonders.jpg"
        }
    ]

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(booksdata);
    },[])

    return (
        <Fragment>
            <div class="row pb-3 m-4">

                {
                    data && data.length>0 ?
                    data.map((item ,index) => {
                        return (
                            
                
                    <div class="col-lg-3 col-sm-6">
                        <div class="row p-2">
                            <div class="col-12 p-1">
                                <div class="card border-0 p-3 shadow  border-top border-5 rounded"> 
                                  {/* @if(product.ProductImages!=null && product.ProductImages.Count()) */}

                                        <img src={item.imageurl} class="card-img-top rounded" />
                                    
                                   {/* else {
                                        <img src="https://placehold.co/500x600/png" class="card-img-top rounded" />
                                    } */}

                                    <div class="card-body pb-0">
                                        <div class="pl-1">
                                            <p class="card-title h5 text-dark opacity-75 text-uppercase text-center">{item.Title}</p>
                                            <p class="card-title text-warning text-center">by <b>{item.Author}</b></p>
                                        </div>
                                        <div class="pl-1">
                                            <p class="text-dark text-opacity-75 text-center mb-0">
                                                List Price:
                                                <span class="text-decoration-line-through">
                                                <i class="fa fa-inr"></i> {item.ListPrice}
                                                </span>
                                            </p>
                                        </div>
                                        <div class="pl-1">
                                            <p class="text-dark text-opacity-75 text-center">As low as :
                                                <span>
                                                <i class="fa fa-inr"></i> {item.Price100}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <a asp-action="Details"
                                            asp-route-productId="@product.Id"
                                            class="btn btn-primary bg-gradient border-0 form-control">
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                

                        );
                    })
                    :
                    "loading.."
                }
                
            </div>
        </Fragment>
    );
}

export default CRUD;
