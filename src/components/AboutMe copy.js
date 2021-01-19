import React from 'react';
import methacton from '../images/methacton.png';
import nprfc from '../images/nprfc.jpeg';

export default class AboutMe2 extends React.Component {

  render() {
    return (
        <div className="AboutMe" id="AboutMe">
            <center><h1>About Me</h1>
                <p style={{width: '80%'}}>Full stack web developer with Bachelor’s degree in Physics and background in administrative management. Adept in using programming languages Ruby, JavaScript, HTML, and CSS which includes frameworks like React, Redux, and Ruby on Rails. Seeking a position in which I can utilize my professional and creative skills to benefit your company.</p>
                <h4 id="Education">Education</h4>
                <table>
                  <tbody className="table table-hover" align='center' >
                    <tr>
                      <td><img alt="Ville" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Spirit-Mark-RGB.jpg/1200px-Spirit-Mark-RGB.jpg" style={{width: '60px', height: '60px'}}></img></td>
                      <td>Millersville University of Pennsylvania</td>
                      <td>Bachelor of Science in Physics</td>
                      <td>2013</td>
                    </tr>
                    <tr>
                      <td><img alt="Flatiron" src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/255890-6001436d845bc57af0be3ff007f4bcaa-medium_jpg.jpg?buster=1427129016" style={{width: '60px', height: '60px'}}></img></td>
                      <td>Flatiron School</td>
                      <td>Certificate in Software Engineering</td>
                      <td>2020</td>
                    </tr>
                  </tbody>
                </table>
                <h4 id="Work">Work Experience</h4>
                <table>
                  <tbody className="table table-hover"  align='center'>
                    <tr>
                      <td><img alt="ISS" src="https://upload.wikimedia.org/wikipedia/de/thumb/b/bc/Integrated-Service-Solutions-Logo.svg/1200px-Integrated-Service-Solutions-Logo.svg.png" style={{width: '60px', height: '60px'}}></img></td>
                      <td>Integrated Service Solutions</td>
                      <td>Accounting Clerk</td>
                      <td>01/2019 - 05/2020</td>
                    </tr>
                    <tr>
                      <td><img alt="Reed Tech" src="https://tse1.mm.bing.net/th?id=OIP.k_wGnW5Scuz5yDLDc6D_tQAAAA&pid=Api&P=0&w=300&h=300" style={{width: '60px', height: '60px'}}></img></td>
                      <td>Reed Tech IP Services</td>
                      <td>Data Entry Operator</td>
                      <td>03/2018 - 01/2019</td>
                    </tr>
                    <tr>
                      <td><img alt="MedRisk" src="https://www.medrisknet.com/wp-content/uploads/2018/02/MedRisk_Logo_RGB.jpg" style={{width: '100px', height: '60px'}}></img></td>
                      <td>MedRisk Inc</td>
                      <td>Client Delivery Team Lead/ Senior Supervisor</td>
                      <td>05/2016 - 08/2017</td>
                    </tr>
                    <tr>
                      <td><img alt="MedRisk" src="https://www.medrisknet.com/wp-content/uploads/2018/02/MedRisk_Logo_RGB.jpg" style={{width: '100px', height: '60px'}}></img></td>
                      <td>MedRisk Inc</td>
                      <td>Quality Assurance/Reimbursement Analyst</td>
                      <td>01/2015 - 05/2016</td>
                    </tr>
                    <tr>
                      <td><img alt="MedRisk" src="https://www.medrisknet.com/wp-content/uploads/2018/02/MedRisk_Logo_RGB.jpg" style={{width: '100px', height: '60px'}}></img></td>
                      <td>MedRisk Inc</td>
                      <td>Customer Service Representative</td>
                      <td>03/2014 - 01/2015</td>
                    </tr>
                  </tbody>
                </table>
                <h4 id="Extra">Extra Curricular Activities</h4>
                <table>
                  <tbody className="table table-hover"  align='center'>
                    <tr>
                      <td><img alt="NPRFC" src={nprfc} style={{width: '60px', height: '60px'}}></img></td>
                      <td>North Penn Rugby Football Club</td>
                      <td>Player/ Youth Coach/ Field Director</td>
                      <td>2016 - 2020</td>
                    </tr>
                    <tr>
                      <td><img alt="Methacton" src={methacton} style={{width: '60px', height: '60px'}}></img></td>
                      <td>Methacton Warriors Youth Football Team</td>
                      <td>Youth Coach</td>
                      <td>2016 - 2018</td>
                    </tr>
                  </tbody>
                </table></center>
        </div>
    );
  }
  
}