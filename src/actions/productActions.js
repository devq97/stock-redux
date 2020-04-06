import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL
} from "../types";

import axiosClient from "../config/axios";
import Swal from 'sweetalert2';

/**
 * Add product action
 * @param product
 * @returns {Function}
 */
export function addProductAction(product) {
  return async (dispatch) => {
    dispatch( addProduct() );

    try {

      await axiosClient.post('/products', product);
      dispatch( addProductSuccess(product) );
      Swal.fire(
        'Confirmation',
        'Product was created correctly',
        'success'
      )

    } catch (error) {

      console.log(error);
      dispatch( addProductFail() );
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error, try again.'
      })

    }
  }
}

/**
 * AddProduct
 * @returns {{type: *}}
 */
const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true
});

/**
 * Add Product success
 * @param product
 * @returns {{payload: *, type: *}}
 */
const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});

/**
 * Add product fail
 * @returns {{}}
 */
const addProductFail = () => ({
  type: ADD_PRODUCT_FAIL,
  payload: true
});
