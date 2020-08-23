import React from 'react';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a class="nav-link" href="#">AboutMe</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Resume</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Social Media</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
}