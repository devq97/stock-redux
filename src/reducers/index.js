import { combineReducers } from 'redux';
import productsReducer from "./productsReducer";

/**
 * Combine Reducers
 */
export default combineReducers({
  products: productsReducer
});
