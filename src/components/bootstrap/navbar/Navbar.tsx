import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
  <div className="container">
  <Link className='navbar-brand' to="/">E-commerce</Link>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="collapsibleNavbar">
  <ul className="navbar-nav">
    <li className="nav-item">
    <Link className='nav-link' to="shop">Shop</Link>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    <li className='nav-link'>other actions</li>
  </ul>
</div>
  </div>
</nav>
    )
}

export default Navbar;