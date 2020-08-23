import React from 'react';
import Navbar from './Navbar';
import SocialMedia from './SocialMedia';
import AboutMe from './AboutMe';
import Projects from './Projects';

export default class App extends React.Component {
  
  render () {

    return (
      <div className="App">
        <Navbar/>
        <AboutMe/>
        <Projects/>
        <SocialMedia/>
      </div>
    );

  }
  
}
