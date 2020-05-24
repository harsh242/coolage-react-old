import React from "react";
import Feature1 from "./home/feature1";
import Feature2 from "./home/feature2";
import Feature3 from "./home/feature3";
import Hero from "./home/hero";
import App_Banner from "./app-banner";

export default class Home extends React.Component{
    render(){
        return(
      <div className="home">
        <Hero/>
        <Feature1/>
        <Feature2/>
        <Feature3/>
        <App_Banner/>
     
  </div>
           
        )
    }
}