import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL
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
      return {
        ...state
      }

    case ADD_PRODUCT_SUCCESS:
    case ADD_PRODUCT_FAIL:
    default:
      return state;
  }
};
