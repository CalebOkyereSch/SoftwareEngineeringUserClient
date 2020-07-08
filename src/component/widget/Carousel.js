import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide my-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            className="d-block img-fluid"
            src={`../images/7.jpg`}
            alt="First slide"
            style={{
              backgroundSize: "cover !important",
              backgroundRepeat: "no-repeat !important",
              backgroundPosition: "center !important",
              width: "100%",
              height: "600px",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid"
            src={`../images/3.jpg`}
            alt="Second slide"
            style={{
              backgroundSize: "cover !important",
              backgroundRepeat: "no-repeat !important",
              backgroundPosition: "center !important",
              width: "100%",
              height: "600px",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid"
            src={`../images/2.jpg`}
            alt="Third slide"
            style={{
              backgroundSize: "cover !important",
              backgroundRepeat: "no-repeat !important",
              backgroundPosition: "center !important",
              width: "100%",
              height: "600px",
            }}
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
