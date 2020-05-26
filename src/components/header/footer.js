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
                                  <li><NavLink to="/team">Our Team</NavLink></li>
                                  <li><NavLink to="/blogs">Join Us</NavLink></li>
                                  <li><NavLink to="/contact">Contact</NavLink></li>
                                  <li><NavLink to="/faq">FAQs</NavLink></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-7">
                      <div className="single-footer-caption mb-50">
                          <div className="footer-tittle">
                              <h4>Social</h4>
                              <ul>
                                   <li><a href="https://www.instagram.com/coolageapp/"><i class="lni lni-instagram-original"></i> Instagram</a></li>
                                   <li><a href="https://www.linkedin.com/company/coolageapp/"><i class="lni lni-linkedin-original"></i> LinkedIn</a></li>
                                   <li><a href="https://www.facebook.com/coolageapp/"><i class="lni lni-facebook-original"></i> Facebook</a></li>
                                   <li><a href="https://twitter.com/CoolAgeapp"><i class="lni lni-twitter-original"></i> Twitter</a></li>
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
                      Made with <i className="lni lni-heart" aria-hidden="true"></i> by <NavLink to="coolage.app" target="_blank">Coolage.App</NavLink></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
       )
}