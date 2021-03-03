import React from "react";
import "./AddAdmin.css"
import passwordValidationFunction from "../helperFunctions/passwordValidation.js"
import ErrorComponent from "../HelperComponents/ErrorComponent.js"
import emailValidationFunction from "../helperFunctions/emailValidation.js"
import {addAdminFetch} from "../Fetches/addAdminFetch"

function AddAdmin(props) {

    const [email, setEmail] = React.useState("");
    const [emailValidation, setEmailValidation] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [firstNameValidation, setFirstNameValidation] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [lastNameValidation, setLastNameValidation] = React.useState("");
    const [phoneNumberValidation, setPhoneNumberValidation] = React.useState("");
    const [phoneNumber,setPhoneNumber]=React.useState("")
    const [password, setPassword] = React.useState("");
    const [passwordValidation, setPasswordValidation] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [confirmPasswordValidation, setConfirmPasswordValidation] = React.useState("");


    const emailHandler = (e => {
        setEmail(e.target.value);
        if (!emailValidationFunction(e.target.value)) {
            setEmailValidation("error");
        }
        else {
            setEmailValidation("")
        }
    })

    const firstNameHandler = (e => {
        setFirstName(e.target.value)
        if (e.target.value.length < 2) {
            setFirstNameValidation("error")
        } else {
            setFirstNameValidation("");
        }
    })

    const lastNameHandler = (e => {
        setLastName(e.target.value)

        if (e.target.value.length < 2) {
            setLastNameValidation("error")
        } else {
            setLastNameValidation("");
        }
    })

    const phoneNumberHandler=(e=>{
        setPhoneNumber(e.target.value)

        if(e.target.value.length>10 || e.target.value.length<10)
            setPhoneNumberValidation("error");
        else{
            setPhoneNumberValidation("");
        }

    })

    const passwordHandler = (e => {
        setPassword(e.target.value);
        if (!passwordValidationFunction(e.target.value)) {
            setPasswordValidation("error");
        }
        else {
            setPasswordValidation("")
        }

    })

    const confirmPasswordHandler = (e => {
        setConfirmPassword(e.target.value)
        if (passwordValidation || e.target.value !== password) {
            setConfirmPasswordValidation("error")
        }
        else {
            setConfirmPasswordValidation("")

        }
    })

    const signUpAdminHandler = (e => {
        e.preventDefault();
        if (emailValidation || firstNameValidation || lastNameValidation || passwordValidation || confirmPasswordValidation || phoneNumberValidation) {
            console.log("NOT valid")
        } else {
            addAdminFetch({
                email:email,
                firstName:firstName,
                lastName:lastName,
                phoneNumber:phoneNumber,
                password:password
            },localStorage.getItem("user")).then((data) => {
                    if (data.error) {
                        if (data.error.code === "23505") {
                            alert("email already exist");
                        } else {
                            throw new Error();
                        }
                    } else {
                        alert("user Added");
                        setEmail("");
                        setFirstName("")
                        setLastName("")
                        setPhoneNumber("")
                        setPassword("")
                        setConfirmPassword("")
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    })



    return (
        <form onSubmit={signUpAdminHandler} className="signUpForm">
            <h1>add Admin</h1>


            <label htmlFor="email">Email:
            <input name="email" id="email" type="email" onChange={emailHandler} value={email} className={emailValidation} />
            </label>
            {emailValidation ? <ErrorComponent>Enter a valid email</ErrorComponent> : ""}
            <label htmlFor="firstName">First Name:
            <input name="firstName" id="firstName" type="text" onChange={firstNameHandler} value={firstName} className={firstNameValidation} />
            </label>
            {firstNameValidation ? <ErrorComponent>Enter a valid name</ErrorComponent> : ""}

            <label htmlFor="lastName">Last Name:
            <input name="lastName" id="lastName" type="text " onChange={lastNameHandler} value={lastName} className={lastNameValidation} />
            </label>
            {lastNameValidation ? <ErrorComponent>Enter A valid name</ErrorComponent> : ""}
            
            
            <label htmlFor="phonrNumber">phone Number:
            <input name="phoneNumber" id="phoneNumber" type="text " onChange={phoneNumberHandler} value={phoneNumber} className={phoneNumberValidation} />
            </label>
            {phoneNumberValidation ? <ErrorComponent>Enter A valid phone</ErrorComponent> : ""}


            <label htmlFor="password">Password:
            <input name="password" id="password" type="password" onChange={passwordHandler} value={password} className={passwordValidation} />
            </label>

            {passwordValidation ? <ErrorComponent>Password should more than 7 characters</ErrorComponent> : ""}
            {passwordValidation ? <ErrorComponent>Password should contain capital letters</ErrorComponent> : ""}
            {passwordValidation ? <ErrorComponent>Password should contain small letters</ErrorComponent> : ""}
            {passwordValidation ? <ErrorComponent>Password should contain numbers</ErrorComponent> : ""}

            <label htmlFor="confirmPassword">Confirm Password:
            <input name="confirmPassword" id="confirmPassword" type="password" onChange={confirmPasswordHandler} value={confirmPassword} className={confirmPasswordValidation} />
            </label>
            {confirmPasswordValidation ? <ErrorComponent>Password not match</ErrorComponent> : ""}


            <input className="button" value="add admin" type="submit" />

        </form>
    )
}

export default AddAdmin;