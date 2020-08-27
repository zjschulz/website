import React from 'react';

export default class AboutMe extends React.Component {

  render() {
    return (
        <div className="AboutMe" id="AboutMe">
            <center><h1>About Me</h1>
                <p style={{width: '80%'}}>Full stack web developer with background in team management, billing, collections, and records management. Experienced in Ruby on Rails and JavaScript based programming. Seeking a position in which I can utilize my professional and creative skills to benefit your company.</p>
                <h4 id="Education">Education</h4>
                <table>
                  <tbody class="table table-hover" align='center'>
                    <tr>
                      <td>Millersville University of Pennsylvania</td>
                      <td>Bachelor of Science in Physics</td>
                      <td>2013</td>
                    </tr>
                    <tr>
                      <td>Flatiron School</td>
                      <td>Certificate in Software Engineering</td>
                      <td>2020</td>
                    </tr>
                  </tbody>
                </table>
                <h4 id="Work">Work Experience</h4>
                <table>
                  <tbody class="table table-hover"  align='center'>
                    <tr>
                      <td>Integrated Service Solutions</td>
                      <td>Accounting Clerk</td>
                      <td>01/2019 - 05/2020</td>
                    </tr>
                    <tr>
                      <td>Reed Tech IP Services</td>
                      <td>Data Entry Operator</td>
                      <td>03/2018 - 01/2019</td>
                    </tr>
                    <tr>
                      <td>MedRisk Inc</td>
                      <td>Client Delivery Team Lead/ Senior Supervisor</td>
                      <td>05/2016 - 08/2017</td>
                    </tr>
                    <tr>
                      <td>MedRisk Inc</td>
                      <td>Quality Assurance/Reimbursement Analyst</td>
                      <td>01/2015 - 05/2016</td>
                    </tr>
                    <tr>
                      <td>MedRisk Inc</td>
                      <td>Customer Service Representative</td>
                      <td>03/2014 - 01/2015</td>
                    </tr>
                  </tbody>
                </table>
                <h4 id="Extra">Extra Curricular Activities</h4>
                <table>
                  <tbody class="table table-hover"  align='center'>
                    <tr>
                      <td>North Penn Rugby Football Club</td>
                      <td>Player/ Youth Coach/ Field Director</td>
                      <td>2016 - 2020</td>
                    </tr>
                    <tr>
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