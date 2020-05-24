import React from "react";
import Mission from './mission';
import Principles from './principles';
import App_Banner from "../app-banner";


export default class About extends React.Component{

    render(){
        return(
            <div id="about-section">
            <div className="services-area">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="section-tittle text-center mb-80">
                        <h2>About Us​</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div className="container">
             
              <Mission/>
          </div> 
          <App_Banner/>
          </div> 
        )
    }
}