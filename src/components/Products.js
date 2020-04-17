import React, { Fragment, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { fetchProductsAction } from '../actions/productActions';
import Product from "./Product";

/**
 * Products list
 * @returns {*}
 * @constructor
 */
const Products = () => {

  /**
   * useDispatch
   */
  const dispatch = useDispatch();

  /**
   * Reading state
   */
  const products = useSelector( state => state.products.products);
  const error = useSelector( state => state.products.error);
  const loading = useSelector( state => state.products.loading);

  /**
   * Fetch products
   */
  useEffect( () => {

    const fetchProducts = () => dispatch( fetchProductsAction() );
    fetchProducts();

  }, [])

  return (
    <Fragment>
      <h2 className="text-center my-5">
        Products
      </h2>

      {
        error ?
          <p className="font-weight-bold alert alert-danger text-center mt-4">Error</p>
        :
          null
      }

      {
        loading ?
          <p className="text-center">Loading...</p>
        :
          null
      }

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length === 0 ?
              'Products empty'
            :
              (
                products.map( product => (
                  <Product
                    key={product.id}
                    product={product}
                  />
                ))
              )
          }
        </tbody>
      </table>
    </Fragment>
  )
};

export default Products;
