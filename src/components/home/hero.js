import React from "react";
import Lottie from "react-lottie";
import heroanim from "../../lotties/hero.json";
import Logo2 from "../header/cool.png";
import app from "../../assets/img/shape/app_btn2.png"


export default class Hero extends React.Component{
    render(){

        const main={
            height:"80%",
            width:"80%"
        }

      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: heroanim,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

     const mystyle={
        
          textFillColor:"white",
          textStrokeWidth:"1px",
          textStrokeColor:"black"
      };

        return( 
          <div class="slider-area mt-80">
          <div class="slider-active">
              <div class="single-slider slider-height  sky-blue d-flex align-items-center">
                  <div class="container">
                      <div class="row d-flex align-items-center">
                          <div class="col-lg-6 col-md-9 ">
                              <div class="hero__caption">
                                  <h1 style={mystyle} data-animation="fadeInUp" data-delay=".6s">Digitalize your college life with <span><img src={Logo2} alt="Micamp" className="img-fluid " style={main}/></span></h1>                                 
                                  <div class="slider-btns">
                                      <img data-animation="fadeInLeft" data-delay="1.0s" src={app} />
                  
                                 </div>
                              </div>
                          </div>
                          <div class="col-lg-6">
                              <div class="hero__img d-none d-lg-block f-right" data-animation="fadeInRight" data-delay="1s">
                              <Lottie options={defaultOptions}
                                      height={600}
                                      width={600}
                                     />
                              </div>
                          </div>
                      </div>
                  </div>
              </div> 
          </div>
      </div>
        )
    }
}