import React, { Component } from "react";
import Item from "../../component/widget/Item";
import HomeCards from "../../component/widget/HomeCards";
import { Link, withRouter } from "react-router-dom";
import { getProduct } from "../../actions/productActions";
import { getItem } from "../../actions/itemActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import Spinner from "../../component/widget/Spinner";
class Home extends Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    const { product, loading } = this.props.product;
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <header
            className="jumbotron my-4"
            style={{
              backgroundColor: "rgb(15, 46, 64,0.7)",
            }}
          >
            <h1 className="display-3" style={{ color: "#fff" }}>
              A Warm Welcome!
            </h1>
            <p className="lead" style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              ipsam, eligendi, in quo sunt possimus non incidunt odit vero
              aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
              numquam repellat.
            </p>
            <Link to="#" className="btn btn-primary btn-lg">
              Get To Know Us
            </Link>
          </header>
          <HomeCards />
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/products"
                style={{ fontSize: 15, fontWeight: "bolder" }}
              >
                Properties
              </Link>
            </li>
          </ul>
          <div className="row text-center">
            {product === loading || product === null ? (
              <div style={{ margin: "auto" }}>
                <Spinner />
              </div>
            ) : (
              product.map((item, index) => {
                console.log(item);
                if (index < 6) {
                  return (
                    <Item
                      key={index}
                      picture={item.main}
                      bedrooms={item.bed}
                      bathrooms={item.bath}
                      location={item.location}
                      doors={item.rooms}
                      price={item.price}
                    />
                  );
                }
              })
            )}
          </div>
          <Link
            to="/products"
            type="button"
            class="btn btn-primary btn-lg btn-block"
          >
            View More Properties
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  getProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getItem: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  product: state.product,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProp, { getProduct, getItem })(
  withRouter(Home)
);
