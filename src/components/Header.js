import React from "react";
import { Link } from "react-router-dom";

/**
 * Header
 * @param message
 * @returns {*}
 * @constructor
 */
const Header = ({message}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
    <div className="container">
      <h1>
        <Link to={"/"} className="text-light" >
          {message}
        </Link>
      </h1>
    </div>

    <Link to={"/products/new"} className="btn btn-danger nuevo-post d-block d-md-inline-block">Add Product &#43;</Link>
  </nav>
);

export default Header;

