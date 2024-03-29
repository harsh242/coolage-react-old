import React from "react";

export default class About extends React.Component{
    render(){
        return(
            <div className="site-section bg-light" id="about-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <h2 className="section-title mb-3">About Us</h2>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-lg-6" data-aos="fade-right">
                  <img src="images/undraw_bookmarks_r6up.svg" alt="Image" className="img-fluid"/>
                </div>
                <div className="col-lg-5 ml-auto pl-lg-5">
                  <h2 className="text-black mb-4 h3 font-weight-bold">Our Mission</h2>
                  <p className="mb-4">To create an academic podium that will revolutionize the student's lives by acting as a source of accurate and valued information, by not only connecting them to their alumni, worthy college mates & institute people around the world but also serving necessary resources and optimizing the use of technology to ease their anxious days of college life.</p>
                  <ul className="ul-check mb-5 list-unstyled success">
                    <li>Laborum enim quasi at modi</li>
                    <li>Ad at tempore</li>
                    <li>Labore quaerat esse</li>
                  </ul>
                  <p><a href="#" className="btn btn-primary">Learn More</a></p>
                </div>
              </div>
      
              
            </div>
          </div>  
        )
    }
}