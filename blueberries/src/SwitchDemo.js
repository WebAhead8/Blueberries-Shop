import Ract from 'react'
import { Switch, Route } from 'react-router-dom'
const aboutUs = () => <div>aboutUs</div>
const contactUs = () => <div>contactUs</div>
const Store = () => <div>Store</div>

const SwitchDemo =() =>(
    <Switch>
        <Route exact path = "/" component ={aboutUs}></Route>
        <Route exact path = "/contactUs" component ={contactUs}></Route>
        <Route exact path = "/Store"></Route>
    </Switch>
);
export default SwitchDemo;
