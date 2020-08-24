import React from 'react';

export default class Projects extends React.Component {

  render() {
    return (
        <div className="Projects" id="Projects">
            <h1>Projects</h1>
            <div class="accordion">
              <ul>
                <li>
                  <div> <a href="#">
                    <h2>Try Awarded</h2>
                    <p>Description 1</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="#">
                    <h2>Yardsale</h2>
                    <p>Description 2</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="#">
                    <h2>Dog Walker</h2>
                    <p>Description 3</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="#">
                    <h2>Dungeon Master Tool</h2>
                    <p>Description 4</p>
                    </a> </div>
                </li>
              </ul>
            </div>
        </div>
    );
  }
  
}