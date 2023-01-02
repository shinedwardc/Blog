//import { useState, useEffect } from "react"

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  Username: yup.string().required(),
  Title: yup.string().required(),
  Body: yup.string().required()
})

const Comments = ({comments}) => {

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    fetch('http://localhost:3000/api/comments', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

 //console.log(comments);
  return (
    <div>
        <div className = "comment-form">
            <h3>Write a comment...</h3>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label>Username</label>
                <input type = "text" name = "username" {...register("Username")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label>Title</label>
                <input label = "email" {...register("Title")} />
                <label>Body</label>
                <textarea label = "text" {...register("Body")} />
                <input type = "submit"/>
            </form>
        </div>        
        <ul>
            {comments.map((comment) => (
                <li key = {comment._id}>{comment.Body}</li>
            ))}
        </ul>
    </div>
  )
}


export default Comments