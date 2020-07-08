import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
// Register Users

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/signup", userData)
    .then((res) => history.push("/signin"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login - Get User Token

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/signin", userData)
    .then((res) => {
      // Save to localStorage
      const { token } = res.data;
      // set token to header
      // Set token to local storage(only store string)
      localStorage.setItem("jwtToken", token);

      // Set token to Auth header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);
      // alo coding
      getCurrentUser(decoded);

      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// set logged in user

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
// alo coding
export let User = {};

export const getCurrentUser = (user) => {
  User = user;
};

// Log user out

export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for futer requests
  setAuthToken(false);
  //   set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
