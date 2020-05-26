import React from "react";
import Lottie from "react-lottie";
import about from "../../lotties/about.json";

export default class Mission extends React.Component{
    render(){

      
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: about,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
          
        },
        

      
      };
        return(
            <div>
            <div className="container">
              <div className="row mb-5">
              <div className="col-lg-6 img-fluid" data-aos="fade-right">
              <Lottie  options={defaultOptions}
                                     
                                     />
                </div>
                <div className="col-lg-5 ml-auto pl-lg-5">
                  <h3 className="section-tittle"><strong>Our Mission</strong></h3>
                  <p className="mb-4">To create an academic podium that will revolutionize the student's lives by acting as a source of accurate and valued information, by not only connecting them to their alumni, worthy college mates & institute people around the world but also serving necessary resources and optimizing the use of technology to ease their anxious days of college life.</p>
              
                  <h3 className="section-tittle"><strong>Our Vision</strong></h3>
                  <p className="mb-4">A connected world of academia united under one roof that is able to fulfill all the needs of college students, supporting the curious minds to make a happy and productive living.</p>

                </div>

               
              </div>
            </div>
          </div>  
        )
    }
}