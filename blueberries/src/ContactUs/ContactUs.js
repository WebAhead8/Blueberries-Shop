import React from "react";
import "./ContactUs.css";

function ContactUs(props) {
  const [name, setName] = React.useState("");
  const nameHandler = (event) => setName(event.target.value);

  const [email, setEmail] = React.useState("");
  const emailHandler = (event) => setEmail(event.target.value);

  const [phone, setPhone] = React.useState("");
  const phoneHandler = (event) => setPhone(event.target.value);

  const [comment, setComment] = React.useState("");
  const commentHandler = (event) => setComment(event.target.value);

  const [comments, setComments] = React.useState([]);
  const commentsHandler = (event) => {
      if(!name || !email || !phone || !comment)
      {
          alert("fill all the feilds");
      }
      else{
        setComments(
            comments.concat({
              name: name,
              email: email,
              phone: phone,
              comment: comment,
            })
          );
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
        <button onClick={commentsHandler}>submit</button>

        <br />
        <br />
        <footer>CopyRight-Store Name - Blueberries</footer>
      </div>

      <div className="theComments">
        <h2>comments</h2>
        <ul>
        {comments.map((comment) => (
          <li className="theLi">
            Name: {comment.name}
            <br />
            Phone:{comment.phone}
            <br />
            comment:{comment.comment}
            <br />
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
export default ContactUs;
