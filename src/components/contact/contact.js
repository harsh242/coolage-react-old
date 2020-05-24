import React from "react";
import App_Banner from "../app-banner";

export default class Contact extends React.Component{
    render(){
        return(
          <section id="contact">
          <div className="services-area">
          <div className="container">
              <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                      <div className="section-tittle text-center mb-80">
                          <h2>Contact Us​</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <section className="contact-section">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <h2 className="contact-title">Get in Touch</h2>
                      </div>
                      <div className="col-lg-8">
                          <form className="form-contact contact_form">
                              <div className="row">
                                  <div className="col-12">
                                      <div className="form-group">
                                          <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="form-group">
                                          <input className="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="form-group">
                                          <input className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                                      </div>
                                  </div>
                                  <div className="col-12">
                                      <div className="form-group">
                                          <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
                                      </div>
                                  </div>
                              </div>
                              <div className="form-group mt-3">
                                  <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                              </div>
                          </form>
                      </div>
                      <div className="col-lg-3 offset-lg-1">
                          <div className="media contact-info">
                              <span className="contact-info__icon"><i className="ti-home"></i></span>
                              <div className="media-body">
                                  <h3>Mega Boys Hostel NIT Jalandhar, Punjab, India</h3>
                          
                              </div>
                          </div>
                          <div className="media contact-info">
                              <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                              <div className="media-body">
                                  <h3>9098134616</h3>
        
                              </div>
                          </div>
                          <div className="media contact-info">
                              <span className="contact-info__icon"><i className="ti-email"></i></span>
                              <div className="media-body">
                                  <h3>help@coolage.app</h3>
                            
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <App_Banner/>
    </section>
        )
    }
}