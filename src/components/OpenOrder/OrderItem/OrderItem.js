import React, { Component } from 'react';
import './OrderItem.css';

class Orderitem extends Component {
    render() {
        return (
            <section>
                <div className='container' >

                    <div className='row' >
                        <div className='col-md-8' >

                           <div className='Order-detail' >
                                   <div className='row' >
                                      <img  className='Order-detail__img' src={require('../../../Assets/img/iphone6s.jpg')} />
                                    </div>

                                    <div className='row'>
                                        <h4  className='Order-detail__order-name'>Iphone 6s</h4>
                                    </div>

                                    <div className='row'>
                                        <p className="Order-detail__descraption" >Apple iPhone 6, GSM Unlocked, 64GB - Gold </p>
                                    </div>

                           </div>

                        </div>

                        <div className='col-md-4' >

                         <div className='Order__maker' >
                         
                            <div className='row' >
                                <div className='col-md-6' >
                                <img className='Order__maker-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                                    <span className='Order__maker-Name' >Ahmed</span>
                                </div>
                                <div className='col-md-6' >
                                    <div className='Order__time' >
                                        <div >
                                            requested
                                    
                                            <span> 1 hour ago</span>
                                        </div>
                                </div>
                                </div>
                            </div>


                            <div className='row'>
                                <button type="button" className="btn getly___btn  Order__maker__send-message__btn">Send Message</button>
                            </div>

                                    <div className='row' >
                                        <div className='order-price'>

                                            <span>Traveler fee</span>
                                            <div className='order-price__ttaverler-fee' >
                                                from <span>$40</span>
                                            </div>

                                            <div>Price for <span>1</span> item: <span>$220</span></div>

                                            <span>No Offre yet</span>

                                        </div>


                                    </div>

                            <div className='row'>
                                <button type="button" className="btn getly___btn make-offer-btn">Make Offer</button>
                            </div>

                            <hr/>

                             <div className='row'>

                                    <div className='oreder__details__' >
                                        <div className='oreder__details__tfb' >
                                            <div>Deliver to </div>
                                            <span> Cairo, EG</span>
                                        </div>
                                        <div className='oreder__details__tfb'>
                                            <div>Deliver from </div>
                                            <span> New York,US </span>
                                        </div>
                                        <div className='oreder__details__tfb'>
                                            <div>Deliver before </div>
                                            <span> March 20, 2018</span>
                                        </div>
                                        <div className='oreder__details__tfb'>
                                            <div>where to buy </div>
                                            <span>www.Apple.com</span>
                                        </div>
                                        <div className='oreder__details__tfb'>
                                            <div>Quantity </div>
                                            <span>1</span>
                                        </div>

                                    </div>

                                </div>


                         </div>
                       




                        </div>

                    </div>

                </div>
            </section>
        );
    }
}

export default Orderitem;
