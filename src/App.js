import React, { Component } from "react";
import MyContext from "./component/HOC/myContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearUserCart } from "./actions/cartActions";
import store from "./store";
import "./App.css";

// importing components
import Landing from "./component/layout/Landing";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import ItemView from "./screens/itemView/itemView";
import Admi from "./screens/admi/otherAdmi/Admi";
import Product from "./screens/products/products";
import Cart from "./screens/cartView/Cart";
import Dashboard from "./screens/admi/dashboard/Dashboard";
import PrivateRoute from "./component/widget/PrivateRoute";

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

    store.dispatch(clearUserCart());
    // Redirect to login
    window.location.href = "/signin";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyContext>
          <Router>
            <div className="App">
              <Route exact path="/" component={Landing} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/item" component={ItemView} />
              <Route exact path="/admi/dashboard" component={Dashboard} />
              <Route exact path="/products" component={Product} />
              {/* <Route exact path="/signin" component={Login} /> */}
              <Route exact path="/admi/signin" component={Admi} />
              <Switch>
                <PrivateRoute exact path="/cart" component={Cart} />
              </Switch>
              <Route
                exact
                path="/signin"
                render={(props) => <Login {...props} change="signin" />}
              />
              <Route
                exact
                path="/signup"
                render={(props) => <Login {...props} change="signup" />}
              />
            </div>
          </Router>
        </MyContext>
      </Provider>
    );
  }
}

export default App;
