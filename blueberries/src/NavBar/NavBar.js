import React from "react";
import Logo from "../images/logo192.png";
import "./NavBar.css";
function NavBar(props) {
    
    return (
        <div className="navBar">
            <img src={Logo}/>
                <div className="options">
                <a>Store</a>
                <a>About Us</a>
                <a>Contact Us</a>
                </div>
        </div>
    )
}

export default NavBar;