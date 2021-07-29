import React from 'react';
import './style.css';


const Navbar = () => {
    return (
        <div id="rectangle1">

            {/* LEFT SIDE OF NAVBAR*/}
            <div id="providerDirectory">
                <p>Provider Directory</p>
            </div>

            {/* RIGHT SIDE OF NAVBAR*/}
            <div id="links">
                <a href="#" id="learnMore">Learn More</a>
                <a href="#" id="pricing">Pricing</a>
                <a href="#" id="login">Login</a>
            </div>

            <div className="dropdown">
                <i className="fa fa-bars fa-2x"></i>

            {/* LINKS INSIDE THE DROPDOWN BOX*/}
                <div className="dropdown-content">
                    <li >
                    <a href="#">Learn More</a>
                    <br></br>
                    <a href="#">Pricing</a>
                    <br></br>
                    <a href="#">Login</a>
                    </li>
                </div>

            </div>

        {/* CLOSING DIV FOR #RECTANGLE1*/}
        </div>

    );
}

export default Navbar;
