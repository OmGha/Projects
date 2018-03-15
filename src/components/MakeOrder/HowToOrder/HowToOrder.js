import React, { Component } from 'react';
import './HowToOrder.css';



class HowToOrder extends Component {
    render() {
        return (
            <div>
                
                <div className='Getly-Ordr'>

                        <div className="container">
                            <div className="row">
                                <h1 className='Getly-Ordr__title__h1' >How to order with Getly</h1>
                            </div>

                            <div className="row">
                                <h3 className='Getly-Ordr__title__h3' >From Online Store</h3>
                            </div>

                            <div className="row">

                                <div className='col-md-4' >
                                    <div className='Getly-Ordr__steps' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >Go to any webstore</span>
                                    </div>
                                </div>
                                <div className='col-md-4' >
                                    <div className='Getly-Ordr__steps' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >Find your product and copy webpage link</span>
                                    </div>
                                </div>
                                <div className='col-md-4' >
                                    <div className='Getly-Ordr__steps' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >Come back to Getly and paste this link</span>
                                    </div>
                                </div>
                                <div className='col-md-4' >
                                    <div className='Getly-Ordr__steps1' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >Complete your order creation and recieve offers from Travelers</span>
                                    </div>
                                </div>
                                <div className='col-md-4' >
                                    <div className='Getly-Ordr__steps1' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >Set up secure payment (only released upon delivery)</span>
                                    </div>
                                </div>
                                <div className='col-md-4' >
                                    <div className='Getly-Ordr__steps1' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >Meet the traveler in your city to recieve your order</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>



                    <div className='Getly-Ordr2'>

                        <div className='container' >

                        <div className='row' >
                            <h3 className='Getly-Ordr__title__h3' >From Offline Store</h3>
                        </div>

                        <div className="row">

                                <div className='col-md-6' >
                                    <div className='Getly-Ordr__steps' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >tell us about your item</span>
                                    </div>
                                </div>
                                <div className='col-md-6' >
                                    <div className='Getly-Ordr__steps' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >Receive a delivery offer</span>
                                    </div>
                                </div>
                                <div className='col-md-6' >
                                    <div className='Getly-Ordr__steps' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >make deal</span>
                                    </div>
                                </div>
                                <div className='col-md-6' >
                                    <div className='Getly-Ordr__steps' >
                                    <img className='Getly-Ordr__steps__img' src={require('../../../Assets/img/shopping-bag.svg')}/>
                                
                                    <span className='Getly-Ordr__steps__span' >Get your item!</span>
                                    </div>
                                </div>
                            
                                </div>



                        </div>


                        </div>

            </div>
           
        );
    }
}

export default HowToOrder;
