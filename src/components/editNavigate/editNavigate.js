import React, { Component } from 'react';
import SideBar from './sideBar/sideBar'
import './editNavigate.css';
import EditProfile from './editProfile/editProfile';
import Photo from './Photos/Photos';
import PaymentNPayouts from './paymentNPayouts/PaymentNPayouts';


class editNavigate extends Component {
    render() {
        return (
            <div>
               
                <div className='container'>
                    <div className='row whole__Container'>
                        <SideBar/>
                       
                    </div>
                </div>
              
            </div>
        );
    }
}

export default editNavigate;  