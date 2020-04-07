import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from "../types";

/**
 * Initial state
 * @type {{}}
 */
const initialState = {
  products: [],
  error: null,
  loading: false
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
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }
    default:
      return state;
  }
};
