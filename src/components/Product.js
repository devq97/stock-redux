import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction, LoadEditProductAction } from "../actions/productActions";
import Swal from 'sweetalert2';

const Product = ({product}) => {

  /**
   * Destructuring product
   */
  const { name, price, id } = product;

  /**
   * useDispatch
   */
  const dispatch = useDispatch();

  /**
   * useHistory
   */
  const history = useHistory();

  /**
   * Handle delete
   * @param id
   */
  const handleDelete = id => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        dispatch(deleteProductAction(id));
      }
    });

  };

  /**
   * Redirect edit
   * @param product
   */
  const redirectEdit = product => {
    dispatch( LoadEditProductAction(product) );
    history.push(`/products/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td>
        <button
          type="button"
          onClick={ () => redirectEdit(product) }
          className="btn btn-primary mr-2"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
};

export default Product;
