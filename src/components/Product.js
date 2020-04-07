import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productActions";
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

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td>
        <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
          Edit
        </Link>
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
