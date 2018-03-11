import React, { Component } from 'react';
import './whyGetly.css';

class WhyGetly extends Component {
    render() {
        return (
           <section>
               <div className="container">
                    <div className="row">
                        <div className="why-getly__title">
                            <h1 className="why-getly__title__h1">Why Getly?</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className='why-getly__feature__IMG'></div>
                            <h2 className='why-getly__feature__h2'>Items not available in your country</h2>
                            <p className="why-getly__feature__p">Don't wait for your items to enter the country market.</p>
                        </div>
                        <div className="col-md-4">
                            <div className='why-getly__feature__IMG'></div>
                            <h2 className='why-getly__feature__h2'>Shipping More Expensive</h2>
                            <p className="why-getly__feature__p">Save your money and get your items with a trusted traveler. </p>
                        </div>
                        <div className="col-md-4">
                            <div className='why-getly__feature__IMG'></div>
                            <h2 className='why-getly__feature__h2'>fast shipping or loseing your items</h2>
                            <p className="why-getly__feature__p" >Don't wait for your items to enter the country market</p>
                        </div>
                    </div>

                    <div className="row">
                          <button type="button" className="btn getly___btn why-getly__box__create-order__btn">Create Oreder</button>
                    </div>
               </div>
           </section>
        );
    }
}

export default WhyGetly;
