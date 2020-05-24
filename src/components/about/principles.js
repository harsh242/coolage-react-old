import React from "react";

export default class Principles extends React.Component{
    render(){
        return(
            <div >
            <div className="container">
              <div className="row mb-5">
                <div className="col-lg-6 ">
                  <h2 className="section-title mb-3">Our Principles</h2>
                  <ul className="ul-check mb-5 ">
                    <li>	We remain aware of our mission</li>
                    <li>	We treat everyone with respect</li>
                    <li>	We care for students</li>
                    <li>	We believe sharing is caring</li>
                    <li>	We honour the responsibilities entrusted on us</li>
                  </ul>
                </div>
                <div className="col-lg-6" data-aos="fade-right">
                  <img src="images/undraw_bookmarks_r6up.svg" alt="Image" className="img-fluid"/>
                </div>
              </div>
              
            </div>
          </div>  
        )
    }
}