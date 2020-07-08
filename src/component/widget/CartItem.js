import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCartItem } from "../../actions/cartActions";
const CartItem = (props) => {
  // function onDeleteClick(id) {
  //   props.deleteCartItem(id);
  // }
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
          <Link to="#" className="btn btn-lg btn-primary ">
            Buy Property
          </Link>
          <Link
            to="/cart"
            className="btn btn-lg btn-primary"
            onClick={() => props.deleteCartItem(props.id)}
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
};
export default connect(null, { deleteCartItem })(CartItem);
