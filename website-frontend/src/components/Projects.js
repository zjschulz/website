import React from 'react';

export default class Projects extends React.Component {

  render() {
    return (
        <div className="Projects" id="Projects">
            <h1><center>Projects</center></h1>
            <div class="accordion">
              <ul>
                <li>
                  <div> <a href="https://www.youtube.com/watch?v=ZyaNO0lgK18&t=13s">
                    <h2>Try Awarded</h2>
                    <p>Description 1</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="https://www.youtube.com/watch?v=R_NATOJQ8iA">
                    <h2>Yardsale</h2>
                    <p>Description 2</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="https://www.youtube.com/watch?v=ce2nz0LCxm4&t=15s">
                    <h2>Dog Walker</h2>
                    <p>Description 3</p>
                    </a> </div>
                </li>
                <li>
                  <div> <a href="https://www.youtube.com/watch?v=kaYfgoIQWFQ">
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