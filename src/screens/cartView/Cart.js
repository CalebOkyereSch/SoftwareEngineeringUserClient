import React, { Component } from "react";
// import db from "../../db.json";
import CartItem from "../../component/widget/CartItem";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import { getUserCart, deleteCartItem } from "../../actions/cartActions";
import { connect } from "react-redux";
import Spinner from "../../component/widget/Spinner";
import PropTypes from "prop-types";
// import { profile_url } from "gravatar";

class Cart extends Component {
  componentDidMount() {
    this.props.getUserCart();
  }

  render() {
    // const { user } = this.props.auth;
    const { cart, loading } = this.props.cart;
    let cartContent;

    if (cart === loading || cart === null) {
      cartContent = (
        <div>
          <Navbar />
          <Spinner />
          <Footer />
        </div>
      );
    } else {
      cartContent = (
        <div className="container-fluid">
          {/* {console.log(cart)} */}
          <Navbar />
          <div className="container">
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  picture={item.main}
                  location={item.location}
                  price={item.price}
                  description={item.description}
                />
              );
            })}
          </div>
          <Footer />
        </div>
      );
    }

    return cartContent;
  }
}

Cart.propTypes = {
  getUserCart: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  cart: state.cart,
  auth: state.auth,
});

export default connect(mapStateToProp, { getUserCart, deleteCartItem })(Cart);
