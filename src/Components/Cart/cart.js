
import React, { Fragment, useEffect, useState } from "react";

const Cart= () => {
    const [data, setData] = useState([]);

    return (
        <>
            {
                    data && data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <form method="post">
                                    <br />
                                    <div class="card shadow border-0">
                                        <div class="card-header bg-secondary bg-gradient text-light ml-0 py-4">
                                            <div class="row px-4">
                                                <div class="col-6">
                                                    <h5 class="pt-2 text-white">
                                                        Shopping Cart
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body my-4">
                                            <div class="row">
                                            </div>
                                            <div class="row mb-3 pb-3">
                                                <div class="col-md-2 offset-md-1">
                                                    <a asp-area="Customer" asp-controller="Home" asp-action="Index" class="btn btn-outline-primary text-uppercase mb-5 btn-sm"><small>Continue Shopping</small></a>
                                                </div>
                                                <div class="col-md-10 offset-md-1">


                                                    <div class="row border-bottom pb-3">
                                                        <div class="d-none d-lg-block col-lg-1 text-center py-2">
                                                            <img src={item.imageUrl && item.imageUrl.split("fakepath")[1]} width="100%" className="rounded" />
                                                            {/* @if (item.Product.ProductImages != null && item.Product.ProductImages.Count() > 0) {
                                                <img src="@item.Product.ProductImages.FirstOrDefault().ImageUrl" class="card-img-top rounded w-100" />
                                            }
                                            else {
                                                <img src="https://placehold.co/500x600/png" class="card-img-top rounded w-100" />
                                            } */}
                                                        </div>
                                                        <div class="col-12 col-lg-6 pt-md-3">
                                                            <h5 class="text-uppercase text-secondary"><strong>@item.Product.Title</strong></h5>
                                                            <p><small>@Html.Raw(item.Product.Description)</small></p>
                                                        </div>
                                                        <div class="col-12  col-lg-5 text-center row">
                                                            <div class="col-3 text-md-right pt-2 pt-md-4">
                                                                <h6 class="fw-semibold">
                                                                    @item.Price.ToString("c")
                                                                    <span class="text-muted">&nbsp;x&nbsp;</span>@item.Count
                                                                </h6>
                                                            </div>
                                                            <div class="col-6 col-sm-4 col-lg-6 pt-2">
                                                                <div class="w-75 btn-group" role="group">
                                                                    <a asp-action="plus" asp-route-cartId="@item.Id" class="btn btn-outline-primary bg-gradient py-2">
                                                                        <i class="bi bi-plus-square"></i>
                                                                    </a> &nbsp;
                                                                    <a asp-action="minus" asp-route-cartId="@item.Id" class="btn btn-outline-primary bg-gradient py-2">
                                                                        <i class="bi bi-dash-square"></i>
                                                                    </a>
                                                                </div>

                                                            </div>
                                                            <div class="col-3 col-sm-4 col-lg-2 offset-lg-1 text-right pt-2">
                                                                <a asp-action="remove" asp-route-cartId="@item.Id" class="btn btn-danger bg-gradient py-2 ">
                                                                    <i class="bi bi-trash-fill"></i>
                                                                </a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer bg-white border-0">
                                                <div class="row">
                                                    <div class="col-md-4 offset-md-4">
                                                        <ul class="list-group mb-4">
                                                            <li class="d-flex justify-content-between align-items-center">
                                                                <h5 class="text-dark fw-semibold text-uppercase"> Total (USD)</h5>
                                                                <h4 class="text-dark fw-bolder">@Model.OrderHeader.OrderTotal.ToString("c")</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2 offset-md-5">
                                                        <a asp-action="Summary" class="btn btn-primary border-0 bg-gradient w-100 py-2">Summary</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            );
                        })
                        :
                        "loading"
                    }
            

        </>
    );
};

export default Cart;