import React from 'react';
import Navbar from './Navbar';
import SocialMedia from './SocialMedia';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';

export default class App extends React.Component {
  
  render () {

    return (
      <div className="App" style={{backgroundImage: 'url(http://1.bp.blogspot.com/-DcLFSqc9-pE/TcwhHltYMHI/AAAAAAAACQk/f83I791s0V0/s1600/raghu-lilies-1920-x-1200-background.jpg)', backgroundAttachment: 'fixed'}}>
        <Navbar/>
        <AboutMe/>
        <Projects/>
        <Resume/>
        <SocialMedia/>
      </div>
    );

  }
  
}
