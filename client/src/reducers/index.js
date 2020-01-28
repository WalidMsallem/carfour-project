import { combineReducers } from "redux";
import authReducer from "./authReducer";
import rapportReducer from "./rapportReducer";

export default combineReducers({
  auth: authReducer,
  rapport : rapportReducer
  
});