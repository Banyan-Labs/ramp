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
            <div>
                <a href="#" id="learnMore">Learn More</a>
                <a href="#" id="pricing">Pricing</a>
                <a href="#" id="login">Login</a>
            </div>

        {/* CLOSING DIV FOR #RECTANGLE1*/}
        </div>

    );
}

export default Navbar;