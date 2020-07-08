// Remove from cart and  Buy Item

import axios from "axios";
import { GET_CART, CART_LOADING, CLEAR_CART, GET_ERRORS } from "./types";

// get current user cart

export const getUserCart = () => (dispatch) => {
  dispatch(setCartLoading());
  axios
    .get("/api/users/cart")
    .then((res) =>
      dispatch({
        type: GET_CART,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_CART,
        payload: [],
      })
    );
};

// Cart Loading

export const setCartLoading = () => {
  return {
    type: CART_LOADING,
  };
};

export const clearUserCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const deleteCartItem = (id, history) => (dispatch) => {
  axios
    .delete(`/api/users/cart/${id}`)
    .then((res) => {
      dispatch({
        type: GET_CART,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
