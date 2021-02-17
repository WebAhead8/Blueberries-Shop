import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar (props) {
  return (
    <div className='navBar'>
      <img src={'img/blueberry.png'} />
      <div className='options'>
        <Link to='/'>
          <a>Store</a>
        </Link>
        <Link to='/AboutUs'>
          <a>About Us</a>
        </Link>
        <Link to='/ContactUs'>
          <a>Contact Us</a>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
