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
        <div style={{backgroundColor: "lightblue"}}>
          <center>
            <h1 style={{padding: "2rem", marginBottom: "0"}}>Zachary Schulz</h1>
          </center>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{}}>
          <div className="collapse navbar-collapse" id="navbarColor01" style={{display: "flex", flexWrap: 'wrap', justifyContent: "center", flexDirection: 'row'}}>
            <ul className="navbar-nav mr-auto" style={{flexDirection: 'row'}}>
              {/* <li className="nav-item dropdown">
                <a onClick={this.myFunction} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Me</a>
                <div className="dropdown-menu" id="myDropdown">
                  <a className="dropdown-item" href="#Education">Education</a>
                  <a className="dropdown-item" href="#Work">Work Experience</a>
                  <a className="dropdown-item" href="#Extra">Extra Curriculars</a>
                </div>
              </li> */}
              <li className="nav-item"><a className="nav-link" href="#AboutMe">About Me</a></li>
              <li className="nav-item"><a className="nav-link" href="#Projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#Resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#SocialMedia">Social Media</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}