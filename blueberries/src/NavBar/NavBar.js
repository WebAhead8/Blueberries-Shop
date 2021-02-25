import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar({ logedIn, setLogedIn, userName }) {


  if (logedIn) {
    return (
      <div className="navBar">
        <img src={"products_img/blueberry.png"} />
        <label>Welecome {userName}</label>
        <div className="options">
          <Link to="/">
            <a>Store</a>
          </Link>

          <Link to="/AboutUs">
            <a>About Us</a>
          </Link>
          <Link to="/ContactUs">
            <a>Contact Us</a>
          </Link>
          <Link to="/addproduct">add Product</Link>
          <a
            onClick={(e) => {
              localStorage.removeItem("user");
              setLogedIn(false);

            }}
            href="/"
          >
            logOut
            </a>

        </div>
      </div>
    )

  } else {
    return (
      <div className="navBar">
        <img src={"products_img/blueberry.png"} />
        <div className="options">
          <Link to="/">
            <a>Store</a>
          </Link>

          <Link to="/AboutUs">
            <a>About Us</a>
          </Link>
          <Link to="/ContactUs">
            <a>Contact Us</a>
          </Link>
          <Link to="/Login">Login</Link>

        </div>
      </div>
    );
  }




}

export default NavBar;
