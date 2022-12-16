import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
//import Post from './Components/Post';
import Posts from './Components/Posts';
import Footer from './Components/Footer';

import { useEffect, useState } from 'react';

import './App.css'

function App() {

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
      <>
        <div className='content-container'>
          <Header />
            <Routes>
              <Route exact path = "/" element = {<Home/>} />
              <Route path = "/posts" element = {<Posts data = {data}/>} />
                {/* {data && data.length > 0 && data.map((post,index) => {
                  return <Route key = {post._id} path = {post.key} element = {<Post post = {post}/>} />           
                })}
              </Route> */}
              <Route path = "/contact" element = {<Contact/>} />
              <Route path = "/about" element = {<About/>} />
              {/*{posts.map((post) => {
                return <Route key = {post.key} path = {"/post/" + post.key.toString()} element = {<Post post = {post}/>} />
              })} */}
            </Routes>
        </div>
        <Footer/>
      </>
  );
}

export default App;
