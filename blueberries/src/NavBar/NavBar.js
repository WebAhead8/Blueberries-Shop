import React from "react";
import "./NavBar.css";
function NavBar(props) {
    
    return (
        <div className="navBar">
            <img src={"img/blueberry.png"}/>
                <div className="options">
                <a>Store</a>
                <a>About Us</a>
                <a>Contact Us</a>
                </div>
        </div>
    )
}

export default NavBar;