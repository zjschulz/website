import React from 'react';
import pdf from '../Resume 8.14.20.pdf';

export default class Resume extends React.Component {

  render() {
    return (
        <div className="Resume" id="Resume">
            <center>
            <h1>Resume</h1>
            <iframe src={pdf} type="application/pdf"
            width="75%"
            height="600px" />
            </center>
        </div>
    );
  }
  
}