import React from 'react';
import './components/css/Scrollbar.css';
import {BrowserRouter as Router,Route ,Switch,Redirect} from 'react-router-dom';
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/navbar';
import Footer from './components/header/footer';
import Contact from './components/contact/contact';
import Blog from './components/blogs/blogs';
import About from './components/about/about';
import Team from './components/team/team';
import Error from './components/error';
import Faq from './components/faq/faq';
import "./assets/scss/style.scss";



function App() {
 
  return (
    <Router>
     <Switch>
    <div >
       <Header/>
      <br/>
      <Route exact  path="/" component={Home} />
      <Route exact  path="/about"  component={About} />
      <Route exact  path="/blogs" component={Blog} />
      <Route exact  path="/contact"  component={Contact} />
      <Route exact  path="/team" component={Team} />
      <Route exact  path="/faq" component={Faq} />
      <Route path="/404" component={Error} />
 
      <br/>
      <Footer/>
      </div>
     
      </Switch>
      </Router>
    
  );
}

export default App;
