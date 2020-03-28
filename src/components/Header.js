import React from "react";

const Header = ({message}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
    <div className="container">
      <h1>{message}</h1>
    </div>
    <a href="/products/new" className="btn btn-danger nuevo-post d-block d-md-inline-block">Add Product &#43;</a>
  </nav>
);

export default Header;

