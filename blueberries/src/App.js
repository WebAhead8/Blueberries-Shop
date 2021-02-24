import logo from './logo.svg'
import React from "react";
import './App.css'
import Store from './Store/Store.js'
import AboutUs from './AboutUs/AboutUS.js'
import ContactUs from './ContactUs/ContactUs.js'
import NavBar from './NavBar/NavBar.js'
import Login from './LogIn/LogIn.js'
import SignUp from './SignUp/SignUp.js'
import AddProduct from './AddProduct/AddProduct.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  // const [logedIn, setLogedIn] = React.useState(false);
  const [logedIn, setLogedIn] = React.useState(false);

  return (
    //<AddProduct />
    <Router>
      <div className='App'>
        <NavBar logedIn={logedIn} setLogedIn={setLogedIn} />

        <Switch>
          <Route exact path='/AboutUs' component={AboutUs}></Route>
          <Route exact path='/addproduct' component={AddProduct}></Route>
          <Route exact path='/ContactUs' component={ContactUs}></Route>
          <Route exact path='/signup' component={SignUp}></Route>
          <Route exact path='/' component={Store}></Route>
          <Route exact path='/Login' component={Login}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
