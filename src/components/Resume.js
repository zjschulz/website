import React from 'react';
import pdf from '../images/Resume 8.31.20.pdf';

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
            <h1 style={{backgroundImage: 'linear-gradient(to bottom left, whitesmoke, lightblue)', borderStyle: 'solid'}}>Resume</h1>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.showPDF}>Show</button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.hidePDF}>Hide</button>
            <p>
            {this.renderPDF()}
            </p>
            </center>
        </div>
    );
  }
  
}