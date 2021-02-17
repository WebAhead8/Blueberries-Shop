import React from "react";
import "./contactUs";


function ContactUs(props) {

    const [name , setName] = React.useState("");
    const nameHandler = (event) =>setName(event.target.value);

    const [email , setEmail] = React.useState("");
    const emailHandler = (event) =>setEmail(event.target.value);

    const [phone , setPhone] = React.useState("");
    const phoneHandler = (event) =>setPhone(event.target.value);
    
    const [commect , setComment] = React.useState("");
    const commentHandler = (event) =>setComment(event.target.value);

    return (
        <div className="contactUse">

            <h1> Contact Us</h1>

            <h3>Name :</h3>
            <input type="text" name="name" placeHolder="Enter your name" value={name} onChange={nameHandler}/>

            <h3>Email :</h3>
            <input type="text" name="email" placeHolder="Enter your email" value={email} onChange={emailHandler}/>
            
            <h3>Phone :</h3>
            <input type="phone" name="phone" placeHolder="Enter your phone number" value={phone} onChange={phoneHandler}/>
            
            <h3>comment :</h3>
            <textarea name="comment" placeHolder="leave a comment " value={commect} onChange={commentHandler}/>

            <br/>           
            <button>submit</button>
            
            <br/><br/>
            <footer>CopyRight-Store Name - Blueberries</footer>
        </div>
    )
}
export default ContactUs;