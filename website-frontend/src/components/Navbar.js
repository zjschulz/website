import React from 'react';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.myFunction = this.myFunction.bind(this);
  }

  myFunction() {
    const drop = document.getElementById("myDropdown");
    drop.classList.toggle("show");
  }

  render() {
    return (
      <div>
        <center><h1>Zachary Schulz</h1></center>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="collapse navbar-collapse" id="navbarColor01" style={{display: "flex"}}>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a onClick={this.myFunction} class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Me</a>
                <div class="dropdown-menu" id="myDropdown">
                  <a class="dropdown-item" href="#Education">Education</a>
                  <a class="dropdown-item" href="#Work">Work Experience</a>
                  <a class="dropdown-item" href="#Extra">Extra Curriculars</a>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link" href="#Projects">Projects</a></li>
              <li class="nav-item"><a class="nav-link" href="#Resume">Resume</a></li>
              <li class="nav-item"><a class="nav-link" href="#SocialMedia">Social Media</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}