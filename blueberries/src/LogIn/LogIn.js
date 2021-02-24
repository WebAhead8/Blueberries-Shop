import React from "react";
import "./LogIn.css"
import ErrorComponent from "../HelperComponents/ErrorComponent.js"

function LogIn() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [validLogIn, NotValidLogIn] = React.useState("");




    const emailHandler = (e => {
        setEmail(e.target.value);

    })

    const passwordHandler = (e => {
        setPassword(e.target.value)
    })

    const logInHandler = (e => {
        e.preventDefault();
    })



    return (
        <form onSubmit={logInHandler} className="loginForm">
            <h1>Log in</h1>
            <label htmlFor="email">Email:
            <input name="email" id="email" type="email" onChange={emailHandler} value={email} />
            </label>
            <div className="errorField">
                {/* <label className="errorLabel">Enter A valid Email address</label> */}
            </div>
            <label htmlFor="password">Password:
            <input name="password" id="password" type="password" onChange={passwordHandler} value={password} />
            </label>
            <div className="errorField">
                {/* <label className="errorLabel">Invalid email Or Password</label> */}
            </div>
            <input className="button" value="Login" type="submit"/>
            {validLogIn==="notValid"?<ErrorComponent>Invalid email Or password</ErrorComponent>:""}
            <a className="aLink" >SignUp</a>
        </form>
    )
}

export default LogIn;