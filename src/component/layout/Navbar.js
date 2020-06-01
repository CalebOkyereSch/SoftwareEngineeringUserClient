import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <img src="../images/logo.ico" width="30" height="30" />
        <a className="navbar-brand" href="landing.html">
          Hemight Properties And Construction
        </a>
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
              <a className="nav-link" href="profiles.html">
                {" "}
                Buy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profiles.html">
                {" "}
                Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profiles.html">
                {" "}
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profiles.html">
                {" "}
                About Us
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="register.html">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
