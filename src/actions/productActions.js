import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL
} from "../types";

export function addProductAction() {
  return () => {
    console.log('from action');
  }
}
