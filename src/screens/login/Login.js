import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styles from "./styles.css";
import { Link } from "react-router-dom";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onLoginSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(user);
  }
  onRegisterSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="container-fluid">
        <Navbar />
        <div
          className={
            this.props.change === "signup"
              ? styles.rightPanelActive
              : styles.container
          }
        >
          <div className={styles.signUpContainer}>
            <form noValidate onSubmit={this.onRegisterSubmit}>
              <h1>Register</h1>
              <div className={styles.socialContainer}>
                <Link to="#" className={styles.social}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className={styles.social}>
                  <i className="fab fa-google-plus-g"></i>
                </Link>
                <Link to="#" className={styles.social}>
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
              <span> or use your email for registration</span>
              <input
                type="text"
                className={classnames({
                  "is-invalid": errors.name,
                })}
                placeholder="Name"
                required="yes"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={classnames({
                  "is-invalid": errors.email,
                })}
                required="yes"
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={classnames({
                  "is-invalid": errors.password,
                })}
                required="yes"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
              <input
                type="password"
                name="password2"
                placeholder="Confirm password"
                className={classnames({
                  "is-invalid": errors.password2,
                })}
                required="yes"
                value={this.state.password2}
                onChange={this.onChange}
              />
              {errors.password2 && (
                <div className="invalid-feedback">{errors.password2}</div>
              )}
              <button>Sign Up</button>
            </form>
          </div>
          <div className={styles.signInContainer}>
            <form noValidate onSubmit={this.onLoginSubmit}>
              <h1>Sign in</h1>
              <div className={styles.socialContainer}>
                <Link to="#" className={styles.social}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className={styles.social}>
                  <i className="fab fa-google-plus-g"></i>
                </Link>
                <Link to="#" className={styles.social}>
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
              <span> or use your account</span>
              <input
                type="email"
                placeholder="Email"
                required="yes"
                name="email"
                className={classnames({
                  "is-invalid": errors.email,
                })}
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
              <input
                name="password"
                type="password"
                className={classnames({
                  "is-invalid": errors.password,
                })}
                placeholder="Password"
                required="yes"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
              <Link to="#">Forgot your pasword?</Link>
              <button>Sign In</button>
            </form>
          </div>
          <div className={styles.overlayContainer}>
            <div className={styles.overlay}>
              <div className={styles.overlayLeft}>
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us pleae login with your personal info
                </p>
                <Link
                  className="ghost btn btn-dark btn-lg text-sm text-lg"
                  id="signIn"
                  to="/signin"
                  // onClick={() => setTurn(this.props.change)}
                >
                  Sign In
                </Link>
              </div>
              <div className={styles.overlayRight}>
                <h1>Hello, Friend!</h1>
                <p>
                  Enter your personal details and continue your journey with us
                </p>
                <Link
                  className="ghost btn btn-dark btn-lg"
                  id="signUp"
                  to="/signup"
                  // onClick={() => setTurn(this.props.change)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
Login.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser, loginUser })(
  withRouter(Login)
);
