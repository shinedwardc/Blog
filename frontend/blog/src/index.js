import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter, Routes, } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Components/Contact';
import About from './Components/About';
//import Post from './Components/Post';
import Posts from './Components/Posts';
import Footer from './Components/Footer';

//import posts from './Modules/Posts'
// const FetchPosts = () => {

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('localhost:5000/posts')
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//         setData(data);
//     })
//     .catch((e) => {
//         console.error(`An error occurred: ${e}`);
//     })
//   }, [])

//   return data;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path = "/" element = {<App/>} />
        <Route path = "/posts" element = {<Posts/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/about" element = {<About/>} />
        {/*{posts.map((post) => {
          return <Route key = {post.key} path = {"/post/" + post.key.toString()} element = {<Post post = {post}/>} />
        })} */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
