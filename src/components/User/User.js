import React, { Component } from 'react';
import Navbar from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import './User.css';

class User extends Component {
    render() {
        return (
            <div >
                <Navbar/>
                   <div className='row'>
                        <div className='userComponent offset-md-3 col-md-6 offset-md-3 row'>
                                        <div className='userComponent__info col-md-6'>
                                            <h2>Hey, I’m <span className='userName'>Abdelaleem!</span></h2>
                                            <h6>Joined in <span>December 2017</span></h6>
                                            <h6>SHOPPER <span className="user__rete">
                                                                    <img src={require('../../Assets/img/star.svg')}/>
                                                                    <img src={require('../../Assets/img/star.svg')}/>
                                                                    <img src={require('../../Assets/img/star.svg')}/>
                                                                    <img src={require('../../Assets/img/star.svg')}/>
                                                                    <img src={require('../../Assets/img/star.svg')}/>
                                                                
                                                            </span> <br/> TRAVELER <span className="user__rete" > 
                                                                <img src={require('../../Assets/img/star.svg')}/>
                                                                    <img src={require('../../Assets/img/star.svg')}/>
                                                                    <img src={require('../../Assets/img/star.svg')}/>
                                                                    <img src={require('../../Assets/img/star.svg')}/>
                                                                    <img src={require('../../Assets/img/star.svg')}/>
                                                                
                                                            </span></h6>
                                            
                                        </div>
                                        <div className='userComponent__image col-md-6'>
                                            <img className='user-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 

                                        </div>
                                            <div className='userinfo '>
                                                                                    
                                            </div>
                                            <div className='usernav  '>
                                            <div className='usernav '>
                                                <nav>
                                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-Reviews" role="tab" aria-controls="nav-Offers" aria-selected="false">
                                                        <span>0</span> Reviews</a>
                                                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-Requested-item" role="tab" aria-controls="nav-To_delivers" aria-selected="false">
                                                        <span>0</span>1 Requested item</a>
                                                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-Upcomming-trip" role="tab" aria-controls="nav-Delivered" aria-selected="false">
                                                        <span>0</span> Upcoming trips</a>

                                                    </div>
                                                </nav>
                                                
                                            </div>
                                            <div className="tab-content" id="nav-tabContent">
                                                    <div className="tab-pane fade show active"  id="nav-Reviews" role="tabpanel" aria-labelledby="nav-home-tab"></div>
                                                    <div className="tab-pane fade" id="nav-Requested-item" role="tabpanel" aria-labelledby="nav-profile-tab"></div>
                                                    <div className="tab-pane fade" id="nav-Upcomming-trip" role="tabpanel" aria-labelledby="nav-contact-tab"></div>
                                                </div>
                                            
                                           </div>
                                        </div>
                                      

                   </div>
                   
                <Footer/>
            </div>
        );
    }
}

export default User;
