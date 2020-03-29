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
    default:
      return state;
  }
};
