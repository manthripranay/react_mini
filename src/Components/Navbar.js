import React from "react";

function Navbar()
{
    return (
    
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-expand-lg bg-primary border-bottom box-shadow mb-3" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="/home">Home</a>
                        </li>
                    
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Content Management
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a className="dropdown-item" href="/category/index">Category</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item" href="/product/index">Product</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item" href="/company/index">Company</a>
                                    </li>
                                    
                                </ul>
                            </li> */}

                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <li className="nav-item ">
                                <a className="nav-link" href='/Login' >Login</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href='/register'>Register</a>
                            </li>                            
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


