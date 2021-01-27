import React from 'react';

export default class Projects extends React.Component {

  render() {
    return (
        <div className="Projects" id="Projects">
            <h1 style={{backgroundImage: 'linear-gradient(to bottom left, whitesmoke, lightblue)'}}><center>Projects</center></h1>
            <div className="accordion">
              <ul>
                <li>
                  <div> <a href="https://youtu.be/Np9cskcfYrs" target="_blank" rel="noopener noreferrer">
                    <h2>Try Awarded</h2>
                    <p>React.js, Redux.js tool used to track multiple rugby teams’ game statistics and standings in a rugby union league setting.</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="https://youtu.be/IYj_KxJ1DoY" target="_blank" rel="noopener noreferrer">
                    <h2>Yardsale</h2>
                    <p>Javascript single page application used to present multiple sellers’ items for purchase in one place.</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="https://www.youtube.com/watch?v=i7FJvKJF_Ds" target="_blank" rel="noopener noreferrer">
                    <h2>Dog App</h2>
                    <p>Ruby on Rails application used to track volunteer dog walking hours.</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="https://onehundred.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <h2>100 Components of Code</h2>
                    <p>Javascript driven application designed to demonstrate skills.</p>
                    </a> </div>
                </li>
              </ul>
            </div>
        </div>
    );
  }
  
}