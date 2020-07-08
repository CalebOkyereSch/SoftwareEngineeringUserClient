import React from "react";
import styles from "./item.css";
import { Link } from "react-router-dom";
import { getItem } from "../../actions/itemActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
function Item(props) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <div>
          <img
            className="card-img-top"
            src={`http://localhost:5050/assets?filename=${props.picture}`}
            alt="something"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <p className="">{props.location}</p>
          </h4>
          <div className={styles.itemEquip}>
            <div className={styles.info}>
              <i class="fas fa-bed"></i>
              <span>{props.bedrooms}</span>
              <p>Bedrooms</p>
            </div>
            <div className={styles.info}>
              <i class="fas fa-bath"></i>
              <span>{props.bathrooms}</span>
              <p>Bathrooms</p>
            </div>
            <div className={styles.info}>
              <i class="fas fa-door-open"></i>
              <span>{props.doors}</span>
              <p> Rooms</p>
            </div>
          </div>
          <h5>Ghc {props.price} </h5>
        </div>
        <div
          className="card-footer"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <small className="text-muted">
            &#9733; &#9733; &#9733; &#9733; &#9734;
          </small>
          <Link
            to="/item"
            className="btn btn-sm btn-primary"
            onClick={() => props.getItem(props.id)}
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  getItem: PropTypes.func.isRequired,
};

export default connect(null, { getItem })(Item);
