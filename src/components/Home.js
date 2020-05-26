import React from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Feature1 from "./home/feature1";
import Feature2 from "./home/feature2";
import Feature3 from "./home/feature3";
import Hero from "./home/hero";
import App_Banner from "./app-banner";
import Footer from "./header/footer";
import '../assets/scss/override.css';


const Home =() => (
  <ReactFullpage navigation
    

//fullpage options
licenseKey = {'YOUR_KEY_HERE'}
scrollingSpeed = {1000} /* Options here */
scrollHorizontally = {true}  /* Because we are using the extension */
scrollHorizontallyKey = {'YOUR KEY HERE'}
  render={({ state, fullpageApi }) => {
    return (
      <ReactFullpage.Wrapper>
        <div className="section">
        <Hero/>
          
        </div>
        <div className="section">
        <Feature1/>
        </div>
        <div className="section">
        <Feature2/>
        </div>
        <div className="section">
        <Feature3/>
        </div>
        <div className="section">
        <App_Banner/>
        </div>
        <div className="section">
        <Footer/>
        </div>
      </ReactFullpage.Wrapper>
    );
  }}
/>
)

export default Home;
   
