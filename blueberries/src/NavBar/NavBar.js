import React from "react";
import "./NavBar.css";
import blueberry from "../img/blueberry.png";
function NavBar(props) {
    
    return (
        <div className="navBar">
            <img src={blueberry}/>
                <div className="options">
                <a>Store</a>
                <a>About Us</a>
                <a>Contact Us</a>
                </div>
        </div>
    )
}

export default NavBar;