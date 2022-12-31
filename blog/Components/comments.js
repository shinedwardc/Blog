//import { useState, useEffect } from "react"

const Comments = ({comments}) => {


 //console.log(comments);
  return (
    <div>
        { <ul>
            {comments.map((comment) => (
                <li key = {comment._id}>{comment.text}</li>
            ))}
        </ul> }
    </div>
  )
}


export default Comments