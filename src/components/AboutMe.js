import React from 'react';
import portrait from '../images/portrait.jpg';

export default class AboutMe extends React.Component {

  render() {
    return (
        <div className="AboutMe" id="AboutMe">
          <center>
            <h1 style={{backgroundImage: 'linear-gradient(to bottom left, whitesmoke, lightblue)', borderStyle: 'solid'}}>About Me</h1>
            <div class="row" style={{width: '80%', marginBottom: '0.5rem'}}>
              <div class="col-md-5">
                <img alt="" src={portrait} style={{width: '100%'}}></img>
              </div>
              <div class="col-md-7">
                <div class="row" style={{textAlign: "left"}}>
                  Full stack web developer with Bachelor’s degree in Physics and background in administrative management.
                  Adept in using programming languages Ruby, JavaScript, HTML, and CSS which includes frameworks like React, Redux, Angular, and Ruby on Rails.
                </div>
                <p></p>
                <div class="row" style={{textAlign: "left"}}>
                  Education?
                </div>
                <p></p>
                <div class="row" style={{textAlign: "left"}}>
                  Other Interests?
                </div>
              </div>
            </div>
          </center>
        </div>
    );
  }
  
}