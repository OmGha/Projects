import React, { Component } from 'react';
import './CreatedOrder.css';
import Navbar from '../../../shared/nav/Navbar';
import Footer from '../../../shared/footer/Footer';



class CreatedOrderOntheway extends Component {
    render() {
        return (
            <div>
            <div className='CreatedOrderComponent' >
                <div className='container' >
                    <div className='row getly-step'>
                        <div className='col-md-3'>
                            <div>
                                <img className='getly-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                <span className='getly-step-text' >Order accepted</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div>
                                <img className='getly-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                <span className='getly-step-text' >Bought the piece</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div>
                                <img className='getly-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                <span className='getly-step-text' >Take off the plane</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div>
                                <img className='getly-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                <span className='getly-step-text' >Receive the order</span>
                            </div>
                        </div>
                    </div>
                    
                    <hr />

                    <div className='row' >
                        <div className='col-md-12' >
                            <h1 className='getly__title__h1' >Your order has been posted to our traveler feed and is now awaiting delivery offers.</h1>
                        </div>
                    </div>
                   
                   
                </div>
            </div>

                <div className='orederdetails'>
                        <div className='container createOrder__container'>
                        <div className='getly-details'>

                        <div className='row ' >
                        <div className='col-md-3' >
                            <div className='Oreder-image' >
                                <img className='Oreder-image__img' src={require('../../../../Assets/img/iphone6s.jpg')} />
                            </div>
                        </div>
                        <div className='col-md-9' >
                            <div  className='Oreder-name'> Iphone 7s plus</div>
                             <span>Koloa Surf(tm) Text Logo Classic Crewneck Sweatshirt.  it’s a real value.. 
                                 Printed with Koloa(tm) Printed on front of Sweatshirt</span>


                        </div>
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col-md-12' >
                            <span>Estimated total</span>
                        </div>

                        <div className='col-md-12' >
                            <p>Final price </p>
                        </div>
                    </div>

                        <div className='row' >
                            <div className='col-md-11' >
                                <span>Item Price</span>
                            </div>
                            <div className='col-md-1' >
                                <span>$<span>200</span></span>
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-md-11' >
                                <span>Sale tax</span>
                            </div>
                            <div className='col-md-1' >
                                <span>$<span>19</span></span>
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-md-11' >
                                <span>Coustom tax</span>
                            </div>
                            <div className='col-md-1' >
                                <span>$<span>0</span></span>
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-md-11' >
                                <span>Traveler fee</span>
                            </div>
                            <div className='col-md-1' >
                                <span>$<span>68</span></span>
                            </div>
                        </div>
                        <hr />
                        <div className='row' >
                            <div className='col-md-11' >
                                <span>Total</span>
                            </div>
                            <div className='col-md-1' >
                                <span>$<span>287</span></span>
                            </div>
                        </div>

                    </div>

                    <div className='row' >
                        <div className='col-md-12' >
                             <h3>Delivery by </h3>
                        </div>
                      
                    </div>

                    <div className='getly-details'>
                       

                        <div className='row' >
                            <div className='col-md-6' >
                            <img className='Order__maker-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                                <span className='Order__maker-Name' >Ahmed Ail</span>
                            </div>
                            <div className='col-md-6' >
                                <div className='Order__time' >
                                    <div >
                                        
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                                    <div className="trip__traveler__rete" >
                                        <img src={require('../../../../Assets/img/star.svg')}/>
                                        <img src={require('../../../../Assets/img/star.svg')}/>
                                        <img src={require('../../../../Assets/img/star.svg')}/>
                                        <img src={require('../../../../Assets/img/star.svg')}/>
                                        <img src={require('../../../../Assets/img/star.svg')}/>
                                       
                                    </div>
                        </div>
                        <hr />

                        <div className='row' >
                          <div className='traveler__details' >
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

                            </div>
                        </div>

                        <div className='row' >
                            <div className='col-md-6' >
                                  <button type="button" className="btn getly___btn send-message__btn"  >Send Message</button>
                            </div>
                            <div className='col-md-6' >
                                  <button type="button" className="btn getly___btn  accept-offer__btn"  >Add meetup place</button>
                            </div>
                        </div>

                    </div>







                </div>
            </div>

        </div>
        );
    }
}

export default CreatedOrderOntheway;
