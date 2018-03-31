import React, { Component } from 'react';
import './PaymentNPayouts.css';

class PaymentNPayouts extends Component {
    render(){
        return(
            <div className='col-md-9 Display__Class'>
                <div className='editProfile__Form'>
                    <div className='Coupon__Header'>Payment and Payout</div>
                    <div className='row '>
                            <div className='col-md-9 list__Content'>Payment Method</div>
                            <div className='col-md-3 btn__Get__ly'>Add</div>
                    </div>
                    <div id='div__clear'></div>
                    <div className='row'>
                            <div className='col-md-9 list__Content'>PayOut Method</div>
                            <div className='col-md-3 btn__Get__ly'>Add</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentNPayouts;  