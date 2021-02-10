import React from 'react';
import portrait from '../images/portrait.jpg';
import ruby from '../images/ruby.png';
import javascript from '../images/javascript.png';
import react from '../images/react-native.png';
import angular from '../images/angularjs.png';
import css from '../images/css.png';
import html from '../images/html.png';

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
            </div>
        )
    }

}