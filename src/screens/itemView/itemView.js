import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../component/widget/Spinner";
import { addToCart } from "../../actions/itemActions";

class ItemView extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    const { item, loading } = this.props.item;
    const { user } = this.props.auth;
    let itemContent;
    if (item === loading) {
      itemContent = (
        <div>
          <Navbar />
          <Spinner />
          <Footer />
        </div>
      );
    } else if (item === null) {
      itemContent = (
        <div>
          <Navbar />
          <h4>No Item Selected ... Go back and select an Item</h4>
          <Footer />
        </div>
      );
    } else {
      itemContent = (
        <div className="container-fluid">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h1 className="my-4">Available &#9733; </h1>
                <div className="list-group">
                  <Link
                    to="#"
                    className=" btn btn-lg btn-primary"
                    onClick={() => this.setState({ show: !this.state.show })}
                  >
                    Product Description
                  </Link>
                  <button
                    className=" btn btn-lg btn-primary"
                    onClick={() => this.props.addToCart(item._id, user)}
                  >
                    Add To Cart &#43;
                  </button>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="card mt-4">
                  <img
                    className="card-img-top img-fluid"
                    src={`http://localhost:5050/assets?filename=${item.main}`}
                    alt="Second slide"
                    style={{
                      backgroundSize: "cover !important",
                      backgroundRepeat: "no-repeat !important",
                      backgroundPosition: "center !important",
                      width: "100%",
                      height: "450px",
                    }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{item.location} </h3>
                    <h4>Ghc {item.price} </h4>
                    <span className="text-warning">
                      &#9733; &#9733; &#9733; &#9733; &#9734; &nbsp;
                    </span>
                    4.0 stars
                  </div>
                  <div className={styles.itemEquip}>
                    <div className={styles.info}>
                      <i className="fas fa-bed"></i>
                      <span>{item.bed}</span>
                      <p>Bedrooms</p>
                    </div>
                    <div className={styles.info}>
                      <i className="fas fa-bath"></i>
                      <span>{item.bath} </span>
                      <p>Bathrooms</p>
                    </div>
                    <div className={styles.info}>
                      <i className="fas fa-door-open"></i>
                      <span>{item.rooms} </span>
                      <p> Rooms</p>
                    </div>
                  </div>
                </div>

                <div className="card card-outline-secondary my-4">
                  <div className="card-header ">
                    {" "}
                    <p
                      className="btn btn-lg btn-secondary btn-block"
                      onClick={() => this.setState({ show: !this.state.show })}
                    >
                      Product Description
                    </p>{" "}
                  </div>
                  {this.state.show ? (
                    <div id="description">
                      <div className="card-body">
                        <p className="h4">{item.description}</p>
                        <small className="text-muted"></small>
                        <hr />
                      </div>
                      <div className="card-body">
                        <div className="row">
                          {item.image.map((element, index) => {
                            return (
                              <img
                                key={index}
                                src={`http://localhost:5050/assets?filename=${element}`}
                                className="col"
                                width="100px"
                                height="100px"
                                alt=""
                              />
                            );
                          })}
                        </div>

                        <hr />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
    return itemContent;
  }
}

ItemView.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => {
  return {
    item: state.item,
    auth: state.auth,
  };
};

export default connect(mapStateToProp, { addToCart })(ItemView);
