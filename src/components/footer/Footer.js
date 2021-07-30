import React from "react";
import "./style.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <BrowserRouter>
      <div className="footer">
        <p className="provider">Provider Directory</p>
        <p className="copyright">Provider Directory© 2021</p>
        <div className="links">
          <Link to="/ramp/learnmore" className="footerLink" id="link1">
            Learn More
          </Link>
          <Link to="/ramp/pricing" className="footerLink" id="link2">
            Pricing
          </Link>
          <Link to="/ramp/partners" className="footerLink" id="link3">
            Partners
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Footer;
