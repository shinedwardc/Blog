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
import Post from './Components/Post';
import Footer from './Components/Footer';

import posts from './Modules/Posts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path = "/" element = {<App/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/about" element = {<About/>} />
        {posts.map((post) => {
          //console.log("/post/" + post.key.toString())
          return <Route key = {post.key} path = {"/post/" + post.key.toString()} element = {<Post post = {post}/>} />
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
