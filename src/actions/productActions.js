import axios from "axios";
import { GET_PRODUCT, PRODUCT_LOADING } from "./types";

// get current user cart

export const getProduct = () => (dispatch) => {
  dispatch(setProductLoading());
  axios
    .get("/api/products/")
    .then((res) =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PRODUCT,
        payload: {},
      })
    );
};

// Cart Loading

export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};
