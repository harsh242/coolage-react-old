import React from "react";
import TeamList from "./teamlist";


export default class Team extends React.Component{
    render(){
        return(
            <div id="team-section">
            <div className="services-area">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="section-tittle text-center mb-80">
                        <h2>Meet our Team</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div className="container">
           
                 <TeamList/> 
            
          </div> 
    
          </div> 
        )
    }
}