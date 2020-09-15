import React from 'react';
import facebook from '../images/icons8-facebook-50.png';
import github from '../images/icons8-github-50.png';
import insta from '../images/icons8-instagram-50.png';
import linkedin from '../images/icons8-linkedin-50.png';

export default class SocialMedia extends React.Component {

  render() {
    return (
        <div className="SocialMedia" id="SocialMedia">
            <center><h1>Social Media</h1>
                <a href="https://www.linkedin.com/in/zachary-schulz-65946663/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn"></img>
                </a>
                <a href="https://github.com/zjschulz" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub"></img>
                </a>
                <a href="https://www.facebook.com/zachary.schulz.50" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook"></img>
                </a>
                <a href="https://www.instagram.com/zachary.schulz.50/" target="_blank" rel="noopener noreferrer">
                  <img src={insta} alt="Instagram"></img>
                </a>
                </center>
        </div>
    );
  }
  
}