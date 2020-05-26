import React from "react";
import FAQList from "./faqlist";


export default class Faq extends React.Component{
    render(){
        return(
            <div id="faq-section">
            <div className="services-area">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12">
                    <div className="section-tittle text-center mb-5">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
           
                 <FAQList/> 
            
          </div> 
    </div>
            
</div> 
        )
    }
}