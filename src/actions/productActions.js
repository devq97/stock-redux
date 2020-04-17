import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  START_EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL, LOAD_EDIT_PRODUCT
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

      const { data } = await axiosClient.get('/products');
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

export function deleteProductAction(id) {
  return async (dispatch) => {

    dispatch( deleteProduct(id) );
    try {

      await axiosClient.delete(`/products/${id}`);
      dispatch( deleteProductSuccess() );

      Swal.fire(
        'Deleted!',
        'Your product has been deleted.',
        'success'
      )

    } catch (error) {

      console.log(error);
      dispatch( deleteProductFail() );

    }
  };
};

/**
 * Delete product
 * @param id
 * @returns {{payload: *, type: *}}
 */
const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  payload: id
});

/**
 * Delete product success
 * @returns {{type: *}}
 */
const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS
});

/**
 * Product delete fail
 * @returns {{payload: boolean, type: *}}
 */
const deleteProductFail = () => ({
  type: DELETE_PRODUCT_FAIL,
  payload: true
});

/**
 * Edit Product
 * @param product
 * @returns {Function}
 */
export function LoadEditProductAction(product) {
  return (dispatch) => {
    dispatch( LoadEditProduct(product) );
  }
}

/**
 * Edit product action
 * @param product
 * @returns {{payload: *, type: *}}
 */
const LoadEditProduct = product => ({
  type: LOAD_EDIT_PRODUCT,
  payload: product
});

/**
 * Start edit product
 * @param product
 */
export const editProductAction = product => {
  return async (dispatch) => {
    dispatch( editProduct() );

    try {

      await axiosClient.put(`/products/${product.id}`, product);
      dispatch( editProductSuccess(product) );

    } catch (error) {

      console.log(error);
      dispatch( editProductFail() );

    }
  }
};

/**
 * editProduct
 * @returns {{type: *}}
 */
const editProduct = () => ({
  type: START_EDIT_PRODUCT
});

/**
 * Edit product success
 * @param product
 * @returns {{payload: *, type: *}}
 */
const editProductSuccess = product => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product
});

/**
 * Product edit fail
 * @returns {{payload: boolean, type: *}}
 */
const editProductFail = () => ({
  type: EDIT_PRODUCT_FAIL,
  payload: true
});

