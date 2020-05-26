import React from 'react';
import app from "../assets/img/shape/app_btn2.png"

export default function App_Banner() {
    return (         
        <div className="available-app-area ">
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-xl-5 col-lg-6">
                    <div className="app-caption">
                        <div className="section-tittle section-tittle3">
                            <h2>Download our Android app Right Away</h2>
                            <div className="app-btn">
                                <a href="#" className="app-btn2"><img src={app} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="app-img">
                        <img src="assets/img/shape/available-app.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="app-shape">
            <img src="assets/img/shape/app-shape-top.png" alt="" className="app-shape-top heartbeat d-none d-lg-block" />
            <img src="assets/img/shape/app-shape-left.png" alt="" className="app-shape-left d-none d-xl-block" />
            <img src="assets/img/shape/app-shape-right.png" alt="" className="app-shape-right bounce-animate " />
        </div>
    </div>
   
       )
}