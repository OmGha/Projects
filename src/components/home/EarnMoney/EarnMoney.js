import React, { Component } from 'react';
import './EarnMoney.css';

class EarnMoney extends Component {
    render() {
        return (
            <section>
                <div className='container' >
                    <div className="row">
                        <div className="earn-money__title" >
                            <h1  className="earn-money__title___h1">Help Getly's shopper and EarnMoney while traveling</h1>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-4">
                            <div className='earn-money__feature__IMG'></div>
                            <h2 className='earn-money__feature__h2'>Items not available in your country</h2>
                            <p className="earn-money__feature__p">Don't wait for your items to enter the country market.</p>
                        </div>
                        <div className="col-md-4">
                            <div className='earn-money__feature__IMG'></div>
                            <h2 className='earn-money__feature__h2'>Shipping More Expensive</h2>
                            <p className="earn-money__feature__p">Save your money and get your items with a trusted traveler. </p>
                        </div>
                        <div className="col-md-4">
                            <div className='earn-money__feature__IMG'></div>
                            <h2 className='earn-money__feature__h2'>fast shipping or loseing your items</h2>
                            <p className="earn-money__feature__p" >Don't wait for your items to enter the country market</p>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default EarnMoney;
