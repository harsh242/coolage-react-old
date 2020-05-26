import React from "react";
import Message from "../../lotties/Messaging.gif";
export default class Feature1 extends React.Component{
    render(){
        const background={
            background:"violet"
        }
        return(
          <div className="applic-apps section-padding2" style={background}>
          <div className="container">
              <div className="row">
            
              <div className="col-lg-6 order-2 order-md-1">
                      <div className="single-cases-info2 mb-30">
                          <h3>Know & get notified about the events happening around you</h3>
                          <p>Lorem ipsum dolor sit amet</p>
                      </div>
                  </div>
              <div className="col-lg-6 order-1 order-md-2" >
                           <img src={Message} className="img-fluid"/>
                          </div>
                      </div>
                  </div>
              </div>
         
    

        )
    }
}