import React from "react";
import error from "../lotties/404.gif";
import {NavLink} from 'react-router-dom';

export default class Error extends React.Component{
    render(){
        return(
      <div className="container pt-5">
      <div className="row justify-content-center pt-5">
           <img src={error} alt="404" className="img-fluid"/>
      </div>
      <div className="row justify-content-center">
      <NavLink to="/"> <span className="btn radius-btn">Back to Home</span></NavLink>
      </div>
  </div>
           
        )
    }
}