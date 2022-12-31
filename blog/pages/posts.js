//import {useState, useEffect} from 'react';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import CardGroup from 'react-bootstrap/CardGroup'


const Posts = ({ data }) => {

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
    <div className = "cards">
        {data && data.length > 0 && data.map((post,index) => (
            <div key = {post._id} className = "card">
                <h2>{post.title}</h2>
                <h5>{post.description}</h5>
                <img className = "image" src = {post.imgUrl} alt = "post" />
                <br/>
                <div className = "text">
                    <p>{post.text}</p>
                </div>
                <br />
            </div>
        ))}
    </div>
  )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json();

    return { props: { data } }
}

export default Posts