import React from 'react';

export default class Navbar extends React.Component {

  render() {
    return (
      <div>
        <center><h1>Zachary Schulz</h1></center>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="collapse navbar-collapse" id="navbarColor01" style={{display: "flex"}}>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">About Me</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link" href="#AboutMe">AboutMe</a></li>
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