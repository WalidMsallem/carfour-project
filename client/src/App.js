import React from 'react';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from './components/HomeScreen'
import Login from './components/Login'
import Signup from './components/Signup'
import MainScreen from './components/MainScreen';
import pdfReader from './components/pdfReader'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./utils/privateRoute";
import axios from "axios";
import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/";
  }
}


function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={HomeScreen}/>
        <Route path="/login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Switch>
          <PrivateRoute path="/home" component={MainScreen} />
        </Switch>
        <Route path="/pdfViewer" component={pdfReader}/>
      </Router>
      </Provider>
    </div>
  );
}

export default App;