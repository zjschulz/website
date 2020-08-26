import React from 'react';
import facebook from '../icons8-facebook-50.png';
import github from '../icons8-github-50.png';
import insta from '../icons8-instagram-50.png';
import linkedin from '../icons8-linkedin-50.png';

export default class SocialMedia extends React.Component {

  render() {
    return (
        <div className="SocialMedia" id="SocialMedia">
            <center><h1>Social Media</h1>
                <a href="https://www.linkedin.com/in/zachary-schulz-65946663/" target="_blank">
                  <img src={linkedin}></img>
                </a>
                <a href="https://github.com/zjschulz" target="_blank">
                  <img src={github}></img>
                </a>
                <a href="https://www.facebook.com/zachary.schulz.50" target="_blank">
                  <img src={facebook}></img>
                </a>
                <a href="https://www.instagram.com/zachary.schulz.50/" target="_blank">
                  <img src={insta}></img>
                </a>
                </center>
        </div>
    );
  }
  
}