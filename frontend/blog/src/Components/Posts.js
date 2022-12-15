import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'

import '../Style/posts.css'

const Posts = () => {

const [data, setData] = useState(null);

useEffect(() => {
    fetch('http://localhost:5000/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        setData(data);
    })
    .catch((e) => {
        console.error(`An error occurred: ${e}`);
    })
}, [])

  return (
    <div>
        <CardGroup>
        {data && data.length > 0 && data.map((post,index) => (
            // <div key = {post._id}>
            //     <h1>{post.title}</h1>
            //     <p>{post.text}</p>
            // </div>          
            <Card key = {post._id} bg = "light" border = "primary" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.text}
                    </Card.Text>
                    <Button variant="primary">Go to post</Button>
                </Card.Body>
            </Card>
        ))}
        </CardGroup>
    </div>
  )
}

export default Posts