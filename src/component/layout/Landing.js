import React, { Component } from "react";
import styles from "./style.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div
          className={styles.landing}
          style={{ background: "url(../images/5.jpg" }}
        >
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-12 text-center "
                  style={{ marginTop: 200 }}
                >
                  <Link to="/signup" className="btn btn-lg btn-primary mr-2">
                    Sign Up
                  </Link>
                  <Link to="signin" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
                <Link to="/home" className={styles.tour}>
                  Take A Tour
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
Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
