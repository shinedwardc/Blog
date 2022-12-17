//import {useState, useEffect} from 'react';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import CardGroup from 'react-bootstrap/CardGroup'


const Posts = ({data}) => {

// const [data, setData] = useState(null);

// useEffect(() => {
//     fetch('http://localhost:5000/posts')
//     .then(response => response.json())
//     .then((data) => {
//         setData(data);
//     })
//     .catch((e) => {
//         console.error(`An error occurred: ${e}`);
//     })
// }, [])

  return (
    <div className = "cards">
        {/* <CardGroup>
        {data && data.length > 0 && data.map((post,index) => (        
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
        </CardGroup> */}
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

export default Posts