import React from 'react';
import {NavLink} from 'react-router-dom';
import app from "../../assets/img/shape/app_btn2.png"


export default function Footer() {
    return (         
      <div className="footer-main">
      <div className="footer-area footer-padding">
          <div className="container">
              <div className="row  justify-content-between">
                  <div className="col-lg-3 col-md-4 col-sm-8">
                       <div className="single-footer-caption mb-30">
                      
                           <div className="footer-logo">
                               <NavLink to="/"><h1>Coolage</h1></NavLink>
                           </div>
                           <div className="footer-tittle">
                               <div className="footer-pera">
                                   <p className="info1">Your all in one gateway to stay Updated, Organized and Connected to your College Life.</p>
                              </div>
                           </div>
                       </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-5">
                      <div className="single-footer-caption mb-50">
                          <div className="footer-tittle">
                              <h4>Quick Links</h4>
                              <ul>
                                  <li><NavLink to="/about">About</NavLink></li>
                                  <li><NavLink to="/blogs">Blogs</NavLink></li>
                                  <li><NavLink to="/contact">Contact</NavLink></li>
                                  <li><NavLink to="/team">Our Team</NavLink></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-7">
                      <div className="single-footer-caption mb-50">
                          <div className="footer-tittle">
                              <h4>Support</h4>
                              <ul>
                                  <li><NavLink to="/report">Report a bug</NavLink></li>
                                  <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                                  <li><NavLink to="/t&c">Terms & Conditions</NavLink></li>
                                  <li><NavLink to="/faq">FAQs</NavLink></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-8">
                      <div className="single-footer-caption mb-50">
                          <div className="footer-tittle">
                              <h4>Get our App</h4>
                              <img src={app} />
                          </div>
                      </div>
                  </div>
              </div>
          
              <div className="row align-items-center">
                  <div className="col-xl-12 ">
                      <div className="footer-copy-right">
                         <p>
                      Made with <i className="ti-heart" aria-hidden="true"></i> by <NavLink to="coolage.app" target="_blank">Coolage.App</NavLink></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
       )
}