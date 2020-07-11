import { GET_CART, CART_LOADING, CLEAR_CART, BUY_ITEM } from "../actions/types";

const initialState = {
  loading: false,
  user: null,
  cart: null,
  message: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CART_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case BUY_ITEM:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: null,
        user: null,
      };
    default:
      return state;
  }
}
