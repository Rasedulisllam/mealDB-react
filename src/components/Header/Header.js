import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-white bg-dark">
            <div className="container">
                <a className="navbar-brand me-5 fw-bold text-warning" href="/#">The mealDB</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
                            <li><a className="menu-item" href="/home">Home</a></li>
                            <li><a className="menu-item" href="/about">About</a></li>
                            <li><a className="menu-item" href="/product">Product</a></li>
                            <li><a className="menu-item" href="/service">Service</a></li>
                    </ul>

                <form className="d-flex">
                    <input className="form-control me-2 " type="search" placeholder="Search meal" aria-label="Search"/>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;