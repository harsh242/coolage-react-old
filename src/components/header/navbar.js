import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./logo.png";
import Logo2 from "./cool.png";
import $ from "jquery";


export default function Header() {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
          $(".header-sticky").removeClass("sticky-bar");
        } else {
          $(".header-sticky").addClass("sticky-bar");
        }
      });
  
      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
      });
  
      
    return (         
    <nav >
  <header>
       
       <div className="header-area header-transparrent ">
            <div className="main-header header-sticky">
                <div className="container">
                    <div className="row align-items-center">
            
                        <div className="col-xl-2 col-lg-2 col-md-2">
                            <div className="logo">
                               <NavLink to="/"><h1>Coolage</h1></NavLink> 
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                          
                            <div className="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">    
                                        <li active ><NavLink to="/"> Home</NavLink></li>
                                        <li><NavLink to="/about" >About Us</NavLink></li>
                                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                        <li><NavLink to="/"> <span className="btn radius-btn"> Get Our App</span></NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                       
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        
    </header>
  </nav>
    
       )
}