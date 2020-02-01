import isEmpty from "../utils/is-empty";

import {
  SET_CURRENT_USER,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILER,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILER
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  loginLoading: false,
  registerLoading : false ,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case LOGIN:
      return {
        ...state,
        loginLoading: true
      };
    case LOGIN_SUCCESS:
    case LOGIN_FAILER:
      return {
        ...state,
        loginLoading: false
      };

      case REGISTER:
        return {
          ...state,
          registerLoading: true
        };
      case REGISTER_SUCCESS:
      case REGISTER_FAILER:
        return {
          ...state,
          registerLoading: false
        };
    default:
      return state;
  }
}
