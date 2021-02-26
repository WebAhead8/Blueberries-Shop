import React from 'react'
import { getComments } from "../Fetches/viewCommentsFetch"
import "./ViewComments.css"

function Viewcomment() {
    const [comments, setComments] = React.useState([]);
    const [commentsList, setCommentsList] = React.useState([]);


    React.useEffect(() => {
        getComments().then(data => {
            console.log(data)
            setComments(data)
        })
    }, [])

    React.useEffect(() => {

        if (comments) {
            const list = comments.map(comment => {
                return (< div className="comment" key={comment.id} >
                    <label><b>name :</b> {comment.name}</label>
                    <label><b>email :</b> {comment.email}</label>
                    <label><b>phonenumber :</b>{comment.phonenumber}</label>
                    <label><b>comment : </b>{comment.comment}</label>
                </div >
                )
            })
            setCommentsList(list)

        }
    }, [comments])

    return (
        <div className="comments">
            {commentsList}
        </div>
    )
}

export default Viewcomment;