import React from "react";
import "./ContactUs.css";
import { addcomment } from "../Fetches/addCommentFetch"

function ContactUs(props) {
  const [sent, setSent] = React.useState(false);


  const [name, setName] = React.useState("");
  const nameHandler = (event) => setName(event.target.value);

  const [email, setEmail] = React.useState("");
  const emailHandler = (event) => setEmail(event.target.value);

  const [phone, setPhone] = React.useState("");
  const phoneHandler = (event) => setPhone(event.target.value);

  const [comment, setComment] = React.useState("");
  const commentHandler = (event) => setComment(event.target.value);

  const commentsHandler = (event) => {
    if (!name || !email || !phone || !comment) {
      alert("fill all the feilds");
    }
    else {

      addcomment({
        name: name,
        email: email,
        phoneNumber: phone,
        comment: comment,
      }).then(data => {
        setName("");
        setEmail("");
        setPhone("");
        setComment("")
        setSent(true)
      })

    }

  };

  return (
    <div>
      <div className="contactUse">
        <h1> Contact Us</h1>

        <h3>Name :</h3>
        <input
          type="text"
          name="name"
          placeHolder="Enter your name"
          value={name}
          onChange={nameHandler}
        />

        <h3>Email :</h3>
        <input
          type="text"
          name="email"
          placeHolder="Enter your email"
          value={email}
          onChange={emailHandler}
        />

        <h3>Phone :</h3>
        <input
          type="phone"
          name="phone"
          placeHolder="Enter your phone number"
          value={phone}
          onChange={phoneHandler}
        />

        <h3>comment :</h3>
        <textarea
          name="comment"
          placeHolder="leave a comment "
          value={comment}
          onChange={commentHandler}
        />

        <br />
        {sent ? <h5>message Sent To The shop</h5> : ""}

        <button onClick={commentsHandler}>send</button>
        <br />
        <br />
        <footer>CopyRight-Store Name - Blueberries</footer>
      </div>

    </div>
  );
}
export default ContactUs;
