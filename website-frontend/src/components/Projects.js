import React from 'react';

export default class Projects extends React.Component {

  render() {
    return (
        <div className="Projects" id="Projects">
            <h1><center>Projects</center></h1>
            <div class="accordion">
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
                  <div> <a href="https://www.youtube.com/watch?v=ce2nz0LCxm4&t=15s" target="_blank" rel="noopener noreferrer">
                    <h2>Dog App</h2>
                    <p>Ruby on Rails application used to track volunteer dog walking hours.</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="https://www.youtube.com/watch?v=kaYfgoIQWFQ" target="_blank" rel="noopener noreferrer">
                    <h2>Dungeon Master Tool</h2>
                    <p>Sinatra tool used by D&D dungeon masters to manage their tables.</p>
                    </a> </div>
                </li>
              </ul>
            </div>
        </div>
    );
  }
  
}