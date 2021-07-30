import React from "react";
import './featured-card.css'
const FeaturedCard = () => {
  return (
    <div className="card-wrapper">
      <div className="custom-card">
        {" "}
        <div className="container">
          <div className="image-wrapper">
            <h1 className="img">img</h1>
          </div>

          <div className="letter-wrapper">
            <p className="text">Lorem ipsum...</p>
          </div>

          <footer className=" foot-container ">
            <h5>contact us</h5>
          </footer>
        </div>
      </div>

      <div className="custom-card">
        <div className="container">
          <div className="image-wrapper">
            <h1 className="img">img</h1>
          </div>

          <div>
            <p className="text">Lorem ipsum...</p>
          </div>

          <footer class=" foot-container ">
            <h5>contact us</h5>
          </footer>
        </div>
      </div>
      <div className="custom-card">
        <div className="container">
          <div className="image-wrapper">
            <h1 className="img">img</h1>
          </div>

          <div>
            <p className="text">Lorem ipsum...</p>
          </div>

          <footer class=" foot-container ">
            <h5>contact us</h5>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
