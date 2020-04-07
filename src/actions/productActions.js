import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
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

/**
 * Fetch products action
 * @returns {Function}
 */
export function fetchProductsAction() {
  return async (dispatch) => {

    dispatch( fetchProducts() );

    try {

      const { data } = await axiosClient.get('products');
      dispatch( fetchProductsSuccess(data) );

    } catch (error) {

      console.log(error);
      dispatch( fetchProductsFail() );

    }
  };
}

/**
 * Fetch products
 * @returns {{payload: boolean, type: *}}
 */
const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
  payload: true
});

/**
 * Fetch products success
 * @param data
 * @returns {{payload: *, type: *}}
 */
const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data
});

/**
 * Fetch products fail
 * @returns {{payload: boolean, type: *}}
 */
const fetchProductsFail = () => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: true
});
