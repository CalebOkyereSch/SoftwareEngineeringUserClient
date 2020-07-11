import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearUserCart } from "../../actions/cartActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearUserCart();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <img src="../images/logo.ico" width="30" height="30" alt="logo" />
          <Link
            className="navbar-brand h1 "
            to="/home"
            style={{ float: "left" }}
          >
            Hemight Properties And Construction
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link h5" to="/products">
                  {" "}
                  Buy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h5" to="/products">
                  {" "}
                  Rent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h5" to="/products">
                  {" "}
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h5" to="#">
                  {" "}
                  About Us
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              {isAuthenticated ? (
                <a className="nav-link h5" href="">
                  <img
                    className="rounded-circle"
                    src={user.avatar}
                    width="30"
                    height="30"
                    alt="logo"
                    title="You must have a Gravatar attached to your email to display image"
                  />
                </a>
              ) : (
                <Link className="nav-link h5" to="/signup">
                  Sign Up
                </Link>
              )}
              <li className="nav-item">
                {isAuthenticated ? (
                  <a
                    className="nav-link h5"
                    href=""
                    onClick={this.onLogoutClick.bind(this)}
                  >
                    Logout
                  </a>
                ) : (
                  <Link className="nav-link h5" to="/signin">
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <Link
                    className="nav-link h5"
                    to="/cart"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: 100,
                    }}
                  >
                    Cart
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </Link>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser, clearUserCart })(Navbar);
