import React from 'react';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="Navbar">
        <h1>Navbar</h1>
        <ul>
            <li>AboutMe</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Social Media</li>
        </ul>
      </nav>
    );
  }
  
}