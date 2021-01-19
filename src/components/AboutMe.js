import React from 'react';

export default class AboutMe extends React.Component {

  render() {
    return (
        <div className="AboutMe" id="AboutMe">
          <center>
            <h1>About Me</h1>
            <div class="row" style={{width: '80%'}}>
              <div class="col-md-5">
                <img alt="" src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"></img>
              </div>
              <div class="col-md-7">
                Full stack web developer with Bachelor’s degree in Physics and background in administrative management. Adept in using programming languages Ruby, JavaScript, HTML, and CSS which includes frameworks like React, Redux, and Ruby on Rails. Seeking a position in which I can utilize my professional and creative skills to benefit your company.
              </div>
            </div>
          </center>
        </div>
    );
  }
  
}