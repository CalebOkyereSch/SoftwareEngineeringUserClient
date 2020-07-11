import React, { Component } from "react";
import CartItem from "../../component/widget/CartItem";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import { getUserCart, deleteCartItem } from "../../actions/cartActions";
import { connect } from "react-redux";
import Spinner from "../../component/widget/Spinner";
import PropTypes from "prop-types";
import { DataContext } from "../../component/HOC/myContext";
class Cart extends Component {
  componentDidMount() {
    this.props.getUserCart();
  }

  // componentWillReceiveProps(prevProps) {
  //   if (this.props.cart !== prevProps.props.cart) {
  //     this.props.getUserCart();
  //   }
  // }

  render() {
    const { cart, loading } = this.props.cart;

    if (cart === loading || cart === null) {
      return (
        <div>
          <Navbar />
          <Spinner />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
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
