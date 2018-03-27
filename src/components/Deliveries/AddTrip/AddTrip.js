import React, { Component } from 'react';
import NAVBER from '../../shared/nav/Navbar';
import Footer from '../../shared/footer/Footer';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../AddTrip/AddTrip.css';

class AddTrip extends Component {
    

    render() {
        return (
           

            <div>
                <NAVBER/>
                 <div className='Addtrip__Cont'>
                     <div className='Addtrip__Cont__Icon'><i  class="_plane fab fa-telegram-plane"></i> </div>
                     <div className='Addtrip__Cont__tex'>
                         <h1><span className='Addtrip__Cont__tex1'>Add new trip</span></h1>
                         <span className='Addtrip__Cont__tex2'>With a trip added, you can make multiple offers and make more money.</span>
                         </div>
                         <div className='Addtrip__Cont__Form '>
                             <form>
                                <div className='Addtrip__Cont__Form__Div row'>
                                    <span className='Addtrip__Cont__Form__Span col-4'>Traviling from</span>
                                    <input className='Addtrip__Cont__Form__Input col-8' placeholder='City'/>
                                </div>
                                <div className='Addtrip__Cont__Form__Div row'>
                                    <span className='Addtrip__Cont__Form__Span col-4'>Traviling to</span>
                                    <input className='Addtrip__Cont__Form__Input col-8' placeholder='City'/>
                                </div>
                                
                              
                                                                
                                  
                                <button type='button' className='Add__btn getly___btn  '>Add</button>

                             </form>
                         </div>
                 </div>
                 <Footer/>
            </div>
        );
    }
}

export default AddTrip;
