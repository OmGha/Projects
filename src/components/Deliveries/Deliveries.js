import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Deliveries/Deliveries.css';


class Deliveries extends Component {
    render() {
        return (
            <div>
                               <NAVBER/>
                <div className='Deliveries__Container'>
                <div  className='Deliveries__Container2'>
                <div className='row'>
                     <div className='Deliveries__Container__Elment offset-lg-2 col-lg-4'>Deliveries</div>
                    <button type='button' className='Deliveries__Container__btn getly___btn col-lg-4 '>Add Trip</button>
                </div>
                   
                </div>
                 
            </div>   
            <div className='display__dilev'>
                <div className='display__dilev__cont'>
                    <span>Add your trip to make multiple offers and earn more money.</span>
                </div>
            </div>   
                     <Footer/>

            </div>
            
        );
    }
}

export default Deliveries;

