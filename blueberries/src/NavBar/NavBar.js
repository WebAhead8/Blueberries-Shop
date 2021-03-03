import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar({ logedIn, setLogedIn, userName, userType }) {
  React.useState(() => {
    if (localStorage.getItem("user")) {
      setLogedIn(true)
    }
  }, [])

  if (userType === "admin") {
    return (
      <div className="navBar">
        <img src={"products_img/blueberry.png"} />
        <label>Welecome {userName}</label>
        <div className="options">
          <Link to="/">
            Store
          </Link>
          <Link to="/addproduct">add Product</Link>
          <Link to="/editproducts">edit Product</Link>
          <Link to="/comments">View Comments</Link>
          <Link to="/AddAdmin">add Admin</Link>
          <a
            onClick={(e) => {
              localStorage.removeItem("user");
              setLogedIn(false);
              localStorage.removeItem("myCard")

            }}
            href="/"
          >
            logOut
            </a>

        </div>
      </div>
    )

  } else if (userType === "client") {
    return (
      <div className="navBar">
        <img src={"products_img/blueberry.png"} />
        <div className="options">
          <Link to="/">
            <a>Store</a>
          </Link>

          <Link to="/AboutUs">
            About Us
          </Link>
          <Link to="/ContactUs">
            Contact Us
          </Link>
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
    );
  } else {
    return (
      <div className="navBar">
        <img src={"products_img/blueberry.png"} />
        <div className="options">
          <Link to="/">
            <a>Store</a>
          </Link>

          <Link to="/AboutUs">
            About Us
        </Link>
          <Link to="/ContactUs">
            Contact Us
        </Link>
          <Link to="/Login">Login</Link>

        </div>
      </div>
    )
  }




}

export default NavBar;
