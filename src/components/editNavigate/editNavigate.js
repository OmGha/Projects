import React, { Component } from 'react';
import Navbar from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import SideBar from './sideBar/sideBar'
import './editNavigate.css';
import EditProfile from './editProfile/editProfile';
import Photo from './Photos/Photos';
import PaymentNPayouts from './paymentNPayouts/PaymentNPayouts';


class editNavigate extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='container'>
                    <div className='row whole__Container'>
                        <SideBar/>
                       
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default editNavigate;  