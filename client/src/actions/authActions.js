import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILER,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILER
} from "./types";

// Register User
export const registerUser = (userData, history ,setMessage, setModal) => dispatch => {
  dispatch({ type: REGISTER });
  axios
    .post("/api/user/register", userData)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS });
      history.push("/login")
    })
    .catch(err => {
      setMessage(transformErrors(err.response.data));
      setModal(true);
      dispatch({ type: REGISTER_FAILER });
      }
    );
};

// Login - Get User Token
export const loginUser = (userData, setMessage, setModal)  => {
  return dispatch => {
    dispatch({ type: LOGIN });
    axios
      .post("/api/user/login", userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        setMessage(transformErrors(err.response.data));
        setModal(true);
        dispatch({
          type: LOGIN_FAILER
        });
      });
  };
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  console.log("hello");
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

const transformErrors = errors => {
  return Object.keys(errors).map(function(key, index) {
    return errors[key];
  });
};
