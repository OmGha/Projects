import React, { Component } from 'react';
import './PaymentWays.css';

class PaymentWays extends Component {
    render() {
        return (
            <div className="Payment-ways" >
              <div className="container" >
                <div className="row">
                    <div className="col-md-2 offset-md-3">
                        <div className="payment-ways__img-box">
                            <div className="payment-ways__img-box__img"></div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="payment-ways__img-box">
                            <div className="payment-ways__img-box__img"></div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="payment-ways__img-box">
                            <div className="payment-ways__img-box__img"></div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
        );
    }
}

export default PaymentWays;
