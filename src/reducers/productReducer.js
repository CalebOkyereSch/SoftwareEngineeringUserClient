import { GET_PRODUCT, PRODUCT_LOADING } from "../actions/types";

const initialState = {
  loading: false,
  product: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
