import React from 'react';
import './components/css/Scrollbar.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/navbar';
import Footer from './components/header/footer';
import Contact from './components/contact/contact';
import Blog from './components/blogs/blogs';
import About from './components/about/about';
import "./assets/scss/style.scss";



function App() {
 
  return (
     <BrowserRouter>
    <div >
       <Header/>
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/blogs" exact component={Blog} />
      <Route path="/contact" exact component={Contact} />
     

      <br/>
      <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
