import React, { Component } from 'react';
import NAVBER from '../../shared/nav/Navbar';
import Footer from '../../shared/footer/Footer';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../AddTrip_Info/AddTrip_Info.css';
import FacebookLogo from '../../../Assets/img/facebook-logo.svg';
import TwitterLogo from '../../../Assets/img/twitter-logo.svg';
import SettingLogo from '../../../Assets/img/settings-logo.svg';
import Offers from '../Offers/Offers';
import To_Delivers from '../To_Delivers/To_Delivers';
import Delivered from '../Delivered/Delivered';



class AddTrip_Info extends Component {
    render() {
        return (
            <div row>
                <NAVBER/>
               <div className='row'>

                   <div className='Deliveries__Container col-12 row'>
                     <div className='Info__Cont offset-2 col-8 row'>
                       <div className='Place__Info__Cont col-8'>
                         <div >
                            <span className='Place__Text '>Cairo, EG</span> -
                            <span className='Place__Text '>New York, NY, US </span> 
                         </div>
                           <span className='Place__Text'>March 28</span>
                       </div>
                       
                       <div className='Salar__Text__Cont col-4'>
                          <div>
                              <h1 className='Salar__Text '>$0</h1>
                          </div>
                           <div>
                             <span className='Salar__Text__Info '>Your total earnings</span>
                           </div>
                       </div>
                     </div>
                     <div className='Share__Info__Cont offset-2 col-8 row '>
                       <div  className='col-6'> 
                            <div className='Share__Cont'>
                                    <button className='fa__btn '>
                                      <img className='Facebook__Logo' src={FacebookLogo}/>
                                      <span>Facebook</span>
                                    </button>
                                   <button className='tw__btn '>
                                     <img className='Twitter__Logo' src={TwitterLogo}/>
                                      <span>Twiteer</span>
                                   </button>
                            </div>
                       </div>
                        <div className='col-6'>
                           <div className='Setteng__Cont'>
                             <button className='setting__btn '>
                               <img className='Setting__Logo' src={SettingLogo}/>
                               <span>Trip setting</span>
                             </button>
                           </div>
                         </div>
                          
                        </div>
                     </div>
                  </div>
                 
                 <div className='Nav__Cont offset-2 col-8'>
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-Offers" role="tab" aria-controls="nav-Offers" aria-selected="false">
                            <span>0</span> Offers</a>
                            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-To_delivers" role="tab" aria-controls="nav-To_delivers" aria-selected="false">
                            <span>0</span> To delivers</a>
                            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-Delivered" role="tab" aria-controls="nav-Delivered" aria-selected="false">
                            <span>0</span> Delivered</a>

                        </div>
                    </nav>
                    
                 </div>
                 <div className="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-Offers" role="tabpanel" aria-labelledby="nav-home-tab"><Offers/></div>
                        <div class="tab-pane fade" id="nav-To_delivers" role="tabpanel" aria-labelledby="nav-profile-tab"><To_Delivers/></div>
                        <div class="tab-pane fade" id="nav-Delivered" role="tabpanel" aria-labelledby="nav-contact-tab"><Delivered/></div>
                    </div>
                  
               
                
                <Footer/>
            </div>
        );
    }
}

export default AddTrip_Info;
