import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar({ logedIn, setLogedIn }) {
  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setLogedIn(!logedIn);
    }
  }, [])


  return (
    <div className='navBar'>
      <img src={'products_img/blueberry.png'} />
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
        {!logedIn ?


          <Link to='/Login'>
            Login
        </Link>

          : <div>
            <Link to='/addproduct'>
              add Product
       </Link>
            <a onClick={e => { localStorage.removeItem("user"); }} href="/">logOut</a>
          </div>}
      </div>
    </div>
  )
}

export default NavBar
