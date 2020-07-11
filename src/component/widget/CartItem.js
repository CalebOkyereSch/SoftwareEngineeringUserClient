import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCartItem, buyItem } from "../../actions/cartActions";
const CartItem = (props) => {
  return (
    <div
      className="card row"
      style={{ flexDirection: "row", marginTop: "20px" }}
    >
      <div>
        <img
          src={`http://localhost:5050/assets?filename=${props.picture}`}
          className="card-img-top col "
          alt="building"
          style={{
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat !important",
            backgroundPosition: "center !important",
            width: "400px",
            height: "300px",
            padding: "10px 20px",
          }}
        />
      </div>
      <div className="card-body col">
        <h5 className="card-title">{props.price}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.location}</h6>
        <p className="card-text">{props.description}</p>

        <div
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
          className="col row"
        >
          <Link
            to="#"
            className="btn btn-lg btn-primary "
            // onClick={() => {
            //   props.buyItem(props.id);
            //   window.alert("Your interest has been made known to the manager");
            // }}
          >
            Buy Property
          </Link>
          <Link
            to="/cart"
            className="btn btn-lg btn-primary"
            onClick={() => {
              props.deleteCartItem(props.id);
              window.alert("Refresh Page After Deleting From Cart");
            }}
          >
            Remove Item
          </Link>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  deleteCartItem: PropTypes.func.isRequired,
  buyItem: PropTypes.func.isRequired,
};
export default connect(null, { deleteCartItem, buyItem })(CartItem);
