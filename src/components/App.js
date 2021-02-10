import React from 'react';
import Navbar from './Navbar';
import SocialMedia from './SocialMedia';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Test from './Test';

export default class App extends React.Component {
  
  render () {

    return (
      <div className="App" style={{backgroundImage: 'url(http://1.bp.blogspot.com/-DcLFSqc9-pE/TcwhHltYMHI/AAAAAAAACQk/f83I791s0V0/s1600/raghu-lilies-1920-x-1200-background.jpg)', backgroundAttachment: 'fixed'}}>
        <Test/>
        {/* <Navbar/>
        <AboutMe/>
        <Projects/>
        <Resume/>
        <SocialMedia/>
        <a href="#" style={{position: "sticky", bottom: 50, left: 0}}>
          <img alt="Home"></img>
        </a> */}
      </div>
    );

  }
  
}
