import React, { Component } from "react";
import Item from "../../component/widget/Item";
import Carousel from "../../component/widget/Carousel";
import { Link, withRouter } from "react-router-dom";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import { getProduct } from "../../actions/productActions";
import { getItem } from "../../actions/itemActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../component/widget/Spinner";
class Product extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    const { product, loading } = this.props.product;
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="my-4">Our Properties </h1>
              <div className="list-group">
                <Link to="#" className="list-group-item">
                  Buy
                </Link>
                <Link href="#" className="list-group-item">
                  Rent
                </Link>
                <Link href="#" className="list-group-item">
                  Lands
                </Link>
              </div>
            </div>

            <div className="col-lg-9">
              <Carousel />
              <div className="row">
                {product === loading ? (
                  <Spinner />
                ) : product === null ? (
                  <h1>No Product Found</h1>
                ) : (
                  product.map((item, index) => {
                    return (
                      <Item
                        key={index}
                        picture={item.main}
                        bedrooms={item.bed}
                        bathrooms={item.bath}
                        location={item.location}
                        doors={item.rooms}
                        price={item.price}
                        id={item._id}
                      />
                    );
                  })
                )}
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Product.propTypes = {
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
  withRouter(Product)
);
