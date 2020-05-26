import React from "react";
import sandeep from "../../assets/img/team/sandeep.jpg";
import praveen from "../../assets/img/team/praveen.jpg";
import jeet from "../../assets/img/team/jeet.jpg";
import rishabh from "../../assets/img/team/rishabh.jpg";
import kartik from "../../assets/img/team/kartik.jpg";
import om from "../../assets/img/team/om.jpg";
import harpreet from "../../assets/img/team/harpreet.jpg";
import pratiksha from "../../assets/img/team/pratiksha.jpg";
import naaz from "../../assets/img/team/naaz.jpg";
import parth from "../../assets/img/team/parth.jpg";
import kunal from "../../assets/img/team/kunal.jpg";
import harsh from "../../assets/img/team/harsh.jpg";
import anmol from "../../assets/img/team/anmol.jpg";
import vikas from "../../assets/img/team/vikas.jpg";
import neelam from "../../assets/img/team/neelam.jpg";
import shilpa from "../../assets/img/team/shilpa.jpg";
import ayurdha from "../../assets/img/team/ayurdha.jpg";
import siddharth from "../../assets/img/team/siddharth.jpg";
import kashyap from "../../assets/img/team/kashyap.jpg";




export default class TeamList extends React.Component{
    constructor() {
        super();
        this.state = {
            isToggleOn: false,
            show: false,
            showme: true,
            team: [
                {
                    name:"Sandeep Thakur",
                    position:"CEO",
                    image:sandeep,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Praveen Agrawal",
                    position:"CTO",
                    image:praveen,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Siddharth Arora",
                    position:"Web Developer",
                    image:siddharth,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Ayurdha Gupta",
                    position:"Finance",
                    image:ayurdha,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Shilpa",
                    position:"HR",
                    image:shilpa,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Neelam Rani",
                    position:"HR Manager",
                    image:neelam,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Vikas",
                    position:"Web Developer",
                    image:vikas,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Anmol Sharma",
                    position:"Marketing",
                    image:anmol,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Harsh Badhai",
                    position:"Product Designer",
                    image:harsh,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Kunal Garg",
                    position:"Web Developer",
                    image:kunal,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Kartik Malviya",
                    position:"UX Designer",
                    image:kartik,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Kashyap",
                    position:"App Developer",
                    image:kashyap,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Jeet",
                    position:"Management",
                    image:jeet,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Rishabh Vatsa",
                    position:"Marketing",
                    image:rishabh,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Parth",
                    position:"Management ",
                    image:parth,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Naaz",
                    position:"Publicity",
                    image:naaz,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Pratiksha Sharma",
                    position:"Content Writing",
                    image:pratiksha,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Harpreet Kaur",
                    position:"Marketing",
                    image:harpreet,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Om Satya",
                    position:"Management",
                    image:om,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                
            ]
        }
    }
    render(){
        return(
            <div className="row justify-content-center">
            {this.state.team.map((team, key) =>
            <div class="col-lg-3 col-md-7 col-sm-8">
            <div class="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <div class="team-image">
                    <img src={team.image} alt="Team"/>
                    <div class="social">
                        <ul>
                            <li><a href={team.instagram}><i class="lni lni-instagram-filled"></i></a></li>
                            <li><a href={team.linkedin}><i class="lni lni-linkedin-original"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="team-content">
                    <h5 class="holder-name"><a href="#">{team.name}</a></h5>
                    <p class="text">{team.position}</p>
                </div>
            </div> 
        </div>
        )}
        </div>
        )}
}