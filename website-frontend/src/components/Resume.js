import React from 'react';
import pdf from '../Resume 8.14.20.pdf';

export default class Resume extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        hidden: "yes",
    }

    this.showPDF = this.showPDF.bind(this);
    this.hidePDF = this.hidePDF.bind(this);
    this.renderPDF = this.renderPDF.bind(this);
}

  showPDF(event) {
    this.setState({
      hidden: "no"
    })
  }

  hidePDF(event) {
    this.setState({
      hidden: "yes"
    })
  }

  renderPDF() {
    if (this.state.hidden === "no") {
      return (
        <iframe src={pdf}
        title="PDF"
        type="application/pdf"
        width="75%"
        height="600px" />
      )
    }
  }

  render() {
    return (
        <div className="Resume" id="Resume">
            <center>
            <h1>Resume</h1>
            <button type="button" class="btn btn-secondary" onClick={this.showPDF}>Show</button>
            <button type="button" class="btn btn-secondary" onClick={this.hidePDF}>Hide</button>
            <p>
            {this.renderPDF()}
            </p>
            </center>
        </div>
    );
  }
  
}