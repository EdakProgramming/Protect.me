import React, { Component } from 'react';
import axios from 'axios';
class Home extends Component {
    // @todo: set your inital state
    state = {
        networks: [],
        speed: ''
    };
    wifiScanner(){
        axios.get('/api/wifi').then((response) => {
            console.log(response);
        for(var i = 0; i < response.data.length; i++) {
            this.test(response.data[i].ssid, response.data[i].security, response.data[i]);
        }
            this.setState({
                networks: response.data
            })
        });
    }

    testSpeed() {
        axios.get('/api/speed').then((test) => {
            console.log(test);
            this.setState({
                speed: test.data
            })
        });
    }

     test(name, sec, item){
     switch (true) {
         case /WPA2/.test(sec):
             console.log(name + ' security: ' + sec + ' which means it is secured.');
             item.css = 'secured'
             break;
         case /WPA/.test(sec):
             console.log(name + ' security: ' + sec + ' which means it is at risk.');
             break;
         default:
            console.log(name + ' security: ' + sec + ' which means it is vulnerable.');
     }
    }

    render() {
        return (
<div>   
    <div className="banner">
        <div className="bg-color">
            <div className="container">
                <div className="row">
                    <div className="banner-text text-center">
                        <div className="text-border">
                            <h2 className="text-dec">Ultimate Network Security </h2>
                        </div>
                        <div className="intro-para text-center quote">
                            <p className="big-text">Don't leave yourself vulnerable to cyber attack.</p>
                            <p className="small-text">Ensure the public network you are accessing is secure.</p>
                        </div>
                        <a href="/" className="mouse-hover">
                            <div className="mouse"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section id="organisations" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <div className="orga-stru">
                            <h3>WPA2</h3>
                            <p>Secure</p>
                            <i className="fa fa-wifi fa-2"></i>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <div className="orga-stru2">
                            <h3>WPA</h3>
                            <p>At Risk</p>
                            <i className="fa fa-wifi"></i>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <div className="orga-stru3">
                            <h3>WEP</h3>
                            <p>Vulnerable</p>
                            <i className="fa fa-wifi"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="detail-info">
                        <hgroup>
                            <h3 className="det-txt"> Is this network secure?</h3>
                            <h4 className="sm-txt">Here's how to tell:</h4>
                            <button id='networkTable' className='btn btn-danger' onClick={this.wifiScanner.bind(this)}>SCAN NETWORKS</button>

                            <button id='speed' className='btn btn-primary' onClick={this.testSpeed.bind(this)}>TEST INTERNET SPEED</button>
                        </hgroup> 
                        <div id='mbsSpeed1'>
                           Your internet speed is: <span id='mbsSpeed'>{this.state.speed}</span>
                        </div>                         
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
         <div className='row'>
          <div className='col-lg-12'>
          <br/>
          <table>
          <thead id='tableHead'>
                <tr>
                    <th>Network Name</th>
                    <th>Network Security</th>
                </tr>
          </thead>
          <tbody id='tbody'>
             {
                this.state.networks.map((network, i) => {
                return( 
                        <tr key={i} className={network.css}>
                            <td>{network.ssid}</td>
                            <td>{network.security}</td>
                        </tr>
                    )
                })          
            }
            </tbody>
             </table>
          </div>
         </div>
        </div>
    </section>

  
    <section id="organisations" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="header-section text-center">
                    <h2>Meet Our Team Members</h2>
                    <p>Over the last 6 months we have developed our coding skills. Learning and utilizing technologies like HTML & CSS, Javascript, jQuery, APIs & AJAX, Node.js, Node Web Servers and MUCH more. We've also learned database structures with Firebase, MySQL and MongoDB. <br/> <strong> It's been a wild ride! </strong> </p>
                    <hr className="bottom-line"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="pm-staff-profile-container">
                        <div className="pm-staff-profile-image-wrapper text-center">
                            <div className="pm-staff-profile-image">
                                <img src="img/ed.jpg" alt="" className="img-thumbnail img-circle" />
                            </div>
                        </div>
                        <div className="pm-staff-profile-details text-center">
                            <p className="pm-staff-profile-name">Edward Acosta</p>
                            <p className="pm-staff-profile-title">Full-Stack Developer</p>
                            <p className="pm-staff-profile-bio">Edward is currently learning Cyber Security and Python. After the bootcamp he will be looking for opportunities as a Developer after he completes a Python Bootcamp in Seattle in January 2018.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="pm-staff-profile-container">
                        <div className="pm-staff-profile-image-wrapper text-center">
                            <div className="pm-staff-profile-image">
                                <img src="img/andrea.jpg" alt="" className="img-thumbnail img-circle" />
                            </div>
                        </div>
                        <div className="pm-staff-profile-details text-center">
                            <p className="pm-staff-profile-name">Andrea Dalrymple</p>
                            <p className="pm-staff-profile-title">Full-Stack Developer</p>
                            <p className="pm-staff-profile-bio">Andrea is confident in HTML, CSS, JavaScript and Ruby. She has recently accepted a technical opportunity in Fort Lauderdale but is always open to networking events.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="pm-staff-profile-container">
                        <div className="pm-staff-profile-image-wrapper text-center">
                            <div className="pm-staff-profile-image">
                                <img src="img/jayce.jpg" alt="" className="img-thumbnail img-circle" />
                            </div>
                        </div>
                        <div className="pm-staff-profile-details text-center">
                            <p className="pm-staff-profile-name">Jayce Azua</p>
                            <p className="pm-staff-profile-title">Full-Stack Developer</p>
                            <p className="pm-staff-profile-bio">Jayce is an experienced Full-Stack Developer. He has created a wide range of projects in PHP, Node, and JavaScript. He is currently working as a Freelance Web Developer and CRM architect. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section id="contact" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="header-section text-center">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you!</p>
                    <hr className="bottom-line"/>
                </div>
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" className="contactForm">
                    <div className="col-md-6 col-sm-6 col-xs-12 left">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control form" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validation"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validation"></div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validation"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 right">
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div className="validation"></div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <button type="submit" id="submit" name="submit" className="form contact-form-button light-form-button oswald light">SEND EMAIL</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    
</div>
        );
    }
}

const styles = {
    // STYLE RULES GO HERE e.g.
    successText: {
        fontSize: 25,
        color: 'green'
    }
}

export default Home;