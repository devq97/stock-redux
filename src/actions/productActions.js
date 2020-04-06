import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL
} from "../types";

/**
 * Add product action
 * @param product
 * @returns {Function}
 */
export function addProductAction(product) {
  return (dispatch) => {
    dispatch( addProduct() );

    try {
      dispatch( addProductSuccess(product) );
    } catch (error) {
      dispatch( addProductFail() );
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
