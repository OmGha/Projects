import React, { Component } from 'react';
import './howToUse.css';

class HowToUse extends Component {
    render() {
        return (
            <section>
                <hr />
                <div className="container">
                    <div className="row">
                       <div className="how-to-use__title">
                            <h1 className="how-to-use__title__h1">How to get your items on Getly?</h1>
                        </div>
                    </div>

                    <div className='row'>


                        <div className='col-md-7'>
                            <div className='how-to-use__steps__img'></div>
                        </div>
                        <div className='col-md-5'>
                            <div className='how-to-use__steps__text'>
                                <span><h1>1</h1></span>
                                <h2>Create Order</h2>
                                <p>Tell us about your item.</p>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='how-to-use__steps__img'></div>
                        </div>
                        <div className='col-md-5'>
                            <div className='how-to-use__steps__text'>
                                <span><h1>2</h1></span>
                                <h2>Receive a delivery offer </h2>
                                <p>Travelers from the community going to your destination will start making delivery offers. Select the one you like and accept it.</p>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='how-to-use__steps__img'></div>
                        </div>
                        <div className='col-md-5'>
                            <div className='how-to-use__steps__text'>
                                <span><h1>3</h1></span>
                                <h2>make deal</h2>
                                <p>Accept a Traveler's delivery offer by pay for using secure payment method . Getly holds the payment securely until you receive the item. Your traveler will pay for your item on your behalf, and will only be transfer upon delivery.</p>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='how-to-use__steps__img'></div>
                        </div>
                        <div className='col-md-5'>
                            <div className='how-to-use__steps__text'>
                                <span><h1>4</h1></span>
                                <h2>Get your item!</h2>
                                <p>meet your travelerm , to get your item.</p>
                            </div>
                        </div>
                                  
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default HowToUse;
