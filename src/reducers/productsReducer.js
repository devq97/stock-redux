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
  LOAD_EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL
} from "../types";

/**
 * Initial state
 * @type {{}}
 */
const initialState = {
  products: [],
  error: null,
  loading: false,
  productToDelete: null,
  productToEdit: null
};

/**
 * Switch of reducer
 * @param state
 * @param action
 * @returns {{}}
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: action.payload
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...state.products, action.payload]
      };
    case ADD_PRODUCT_FAIL:
    case FETCH_PRODUCTS_FAIL:
    case DELETE_PRODUCT_FAIL:
    case EDIT_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productToDelete: action.payload
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter( product => product.id !== state.productToDelete ),
        productToDelete: null
      };
    case LOAD_EDIT_PRODUCT:
      return {
        ...state,
        productToEdit: action.payload
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        productToEdit: null,
        products: state.products.map( product =>
          product.id === action.payload.id ? product = action.payload : product
        )
      };
    default:
      return state;
  }
};
