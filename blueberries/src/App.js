import logo from './logo.svg'
import './App.css'
import Store from './Store/Store.js'
import NavBar from './NavBar/NavBar.js'
import AboutUs from './AboutUs/AboutUs.js'
import ContactUs from './ContactUs/ContactUs.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App () {
  return (
    <Router>
      <div className='App'>
        <NavBar />

        <Switch>
          <Route exact path='/AboutUs' component={AboutUs}></Route>
          <Route exact path='/ContactUs' component={ContactUs}></Route>
          <Route exact path='/' component={Store}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
