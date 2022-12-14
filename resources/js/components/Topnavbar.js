import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  Link } from "react-router-dom";
const Topnavbar= () =>{
return (
<div>
  <nav className

    ="navbar navbar-expand-lg bg-light">
    <div className

      ="container-fluid">
      <Link className

        Name
      ="navbar-brand" to="/">Navbar</Link>
      <button className

      ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className

      ="navbar-toggler-icon"></span>
      </button>
      <div className
="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className

          ="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className
 ="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/abouts" >About</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Action</Link></li>
              <li><Link className="dropdown-item" to="#">Another action</Link></li>
              
              <li><Link className="dropdown-item" to="#">Something else here</Link></li>
            </ul>
          </li>
          <li className ="nav-item">
             <Link className="nav-link" to="/students">Student</Link>
          </li>
         
           <li className ="nav-item">
             <Link className="nav-link" to="/add-students">Add Student</Link>
          </li>
        </ul>
        <form className
="d-flex" role="search">
          <input className
="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className
 ="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>
);
}
export default Topnavbar;