import React from 'react';
import portrait from '../images/portrait.jpg';
import ruby from '../images/ruby.png';
import javascript from '../images/javascript.png';
import react from '../images/react-native.png';
import angular from '../images/angularjs.png';
import css from '../images/css.png';
import html from '../images/html.png';
import facebook from '../images/facebook.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import medium from '../images/medium.png';

export default class Test extends React.Component{

    render() {
        return(
            <div id="Test" style={{backgroundColor: "black"}}>
                <div class="name">
                    Zachary Schulz
                </div>
                <center><div class="frame">
                  <img alt="Portrait" src={portrait}></img>
                </div></center>
                <div class="title">
                    Software Engineer | Developer | Programmer
                </div>
                <div class="techskills">
                    <img src={ruby} alt="Ruby"></img>
                    <img src={javascript} alt="Javascript"></img>
                    <img src={react} alt="React"></img>
                    <img src={angular} alt="Angular"></img>
                    <img src={css} alt="CSS"></img>
                    <img src={html} alt="HTML"></img>
                </div>
                <div style={{height: '500px', backgroundImage: 'linear-gradient(black, #B71FEA, black)', display: "flex"}}>
                </div>
                <div class="socialmedia">
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
                        <img src={instagram} alt="Instagram"></img>
                    </a>
                    <a href="https://medium.com/@zjschulz" target="_blank" rel="noopener noreferrer">
                        <img src={medium} alt="Medium"></img>
                    </a>
                </div>
            </div>
        )
    }

}