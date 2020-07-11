// Remove from cart and  Buy Item

import axios from "axios";
import {
  GET_CART,
  CART_LOADING,
  CLEAR_CART,
  GET_ERRORS,
  BUY_ITEM,
} from "./types";

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

export const deleteCartItem = (id) => (dispatch) => {
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

export const buyItem = (id) => (dispatch) => {
  axios
    .get(`/api/users/cart/${id}`)
    .then((res) => {
      dispatch({
        type: BUY_ITEM,
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
