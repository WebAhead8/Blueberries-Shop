import React from "react";
import "./LogIn.css"
import ErrorComponent from "../HelperComponents/ErrorComponent.js"
import { login } from "../Fetches/loginFetch.js";
import { useHistory } from "react-router-dom";

function LogIn({ setLogedIn }) {

    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [validLogIn, setValidLogIn] = React.useState("");




    const emailHandler = (e => {
        setEmail(e.target.value);

    })

    const passwordHandler = (e => {
        setPassword(e.target.value)
    })

    const logInHandler = (e => {
        e.preventDefault();
        login(email, password).then(data => {
            if (data.error) {
                if (data.error.status === 404) {
                    setValidLogIn("notValid")

                }
            } else {
                setValidLogIn("")
                localStorage.setItem('user', data.access_token);
                history.push("/");
                //window.location.reload();
                setLogedIn(true)
            }

        }).catch(err => {
            console.log("err", err)
        })

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
            <input className="button" value="Login" type="submit" />
            {validLogIn === "notValid" ? <ErrorComponent>Invalid email Or password</ErrorComponent> : ""}
            <a className="aLink" href="/signup">SignUp</a>
        </form>
    )
}

export default LogIn;