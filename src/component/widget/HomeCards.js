import React from "react";
import { Link } from "react-router-dom";
function HomeCards() {
  return (
    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Who We Are </h4>
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              esse necessitatibus neque.
            </p>
          </div>
          <div className="card-footer">
            <Link to="#" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">What We Do</h4>
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis ipsam eos, nam perspiciatis natus commodi similique
              totam consectetur praesentium molestiae atque exercitationem ut
              consequuntur, sed eveniet, magni nostrum sint fuga.
            </p>
          </div>
          <div className="card-footer">
            <Link to="#" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Why Work with Us</h4>
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              esse necessitatibus neque.
            </p>
          </div>
          <div className="card-footer">
            <Link to="#" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCards;
