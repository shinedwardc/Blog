//import {useState, useEffect} from 'react';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import CardGroup from 'react-bootstrap/CardGroup'

import Comments from "../../Components/comments";

import Link from "next/link";

const Posts = ({ data, comments }) => {

 /*const [data, setData] = useState(null);

 useEffect(() => {
    fetch('http://localhost:3000/api/posts', {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        }
     })
     .then(response => response.json())
     .then((data) => {
         setData(data);
    })
     .catch((e) => {
         console.error(`An error occurred: ${e}`);
     })
 }, [])*/

  return (
    <>
    <div className = "cards">
        {data && data.length > 0 && data.map((post,index) => (
            <Link style = {{textDecoration: 'none'}} href = {"/posts/" + post.title}>
            <div key = {post._id} className = "card">
                <h2>{post.title}</h2>
                <h5>{post.description}</h5>
                <img className = "image" src = {post.imgUrl} alt = "post" />
                <br/>
            </div>
            </Link>
        ))}
    </div>
    <div className = "comment-section">
        <Comments comments = {comments}/>
    </div>
    </>
  )
}

export async function getStaticProps() {
    // const res = await fetch('http://localhost:3000/api/posts')
    // const data = await res.json();

    // return { props: { data } }
    const [dataRes, commentsRes] = await Promise.all([
        fetch('http://localhost:3000/api/posts'),
        fetch('http://localhost:3000/api/comments')
    ]);
    const [data, comments] = await Promise.all([
        dataRes.json(),
        commentsRes.json()
    ]);
    return { props: { data, comments } }
}

export default Posts