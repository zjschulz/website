import React from 'react';

export default class Resume extends React.Component {

  render() {
    return (
        <div className="Resume" id="Resume">
            <center>
            <h1>Resume</h1>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vS0IlemYVvSGmKTwuueBjBY5Cb9sy2mjWDP6YEEpxesysIi2naxuSEKY3ts7Pud_PFt-Qc8FcxRlnX9/pub"
            type="application/pdf"
            width="100%"
            height="600px" />
            </center>
        </div>
    );
  }
  
}