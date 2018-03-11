import React, { Component } from 'react';
import '../footer/Footer.css'
import downloadAndroid from '../../../Assets/img/google_play_badge.svg';
import downloadAppStote from '../../../Assets/img/app_store_badge.svg';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                           
                        </div>
                        <div className="col-md-3">
                           <ul>
                               <li>About us</li>
                               <li>How Getly Works</li>
                               <li>Shopper</li>
                               <li>Traveler</li>
                           </ul>
                        </div>  
                        <div className="col-md-3">
                           <ul>
                               <li>Terms of Use</li>
                               <li>Privacy Policy</li>
                               <li>Trust & Safety</li>
                               <li>Getly Help Center</li>
                           </ul>
                        </div>  
                        <div className="col-md-3">
                          <h6>Find Us</h6>
                          <div className="footer__find-us">
                             <div className="footer__find-us__icon" >
                                 <i className="fab fa-facebook-f"></i>
                             </div>
                             <div className="footer__find-us__icon" >
                                <i className="fab fa-twitter"></i>
                             </div>
                             <div className="footer__find-us__icon" >
                                 <i className="fab fa-instagram"></i>
                             </div>
                            
                          </div>
                        </div>  
                        
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer__download-app">
                                <img className="footer__download-app__img" src={downloadAppStote} />
                                <img className="footer__download-app__img" src={downloadAndroid} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                               <h6>© Getly, Inc.</h6>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
