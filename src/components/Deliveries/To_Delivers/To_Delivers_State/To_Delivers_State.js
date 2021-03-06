import React, { Component } from 'react';
import './To_Delivers_State.css';



class To_Delivers_State extends Component {

    render() {
        return (
            <div>
                <div className='CreatedToDelerStateComponent' >
                    <div className='container' >
                        <div className='row ToDelerState-step'>
                            <div className='col-md-3'>
                                <div>
                                    <img className='ToDelerState-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                    <span className='ToDelerState-step-text' >Offer Accepted</span>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div>
                                    <img className='ToDelerState-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                    <span className='ToDelerState-step-text' >Bought The Piece</span>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div>
                                    <img className='ToDelerState-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                    <span className='ToDelerState-step-text' > Take The Plane</span>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div>
                                    <img className='ToDelerState-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                    <span className='ToDelerState-step-text' >Meet The Shopper</span>
                                </div>
                            </div>
                        </div>
                        
                        <hr />

                        <div className='row' >
                            <div className='col-md-12' >
                                <h1 className='ToDelerState__title__h1' >Your order has been posted to our traveler feed and is now awaiting delivery offers.</h1>
                            </div>
                        </div>
                       
                       
                    </div>
                </div>

                    <div className='ToDelerStatedetails'>
                            <div className='container createOrder__container'>
                            <div className='ToDelerState-details'>

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

                                <div className='order__details' >
                                    <div className='order__details__tfb' >
                                        <div>Deliver to </div>
                                        <span> Cairo, EG</span>
                                    </div>
                                    <div className='order__details__tfb'>
                                        <div>Deliver from </div>
                                        <span> New York,US </span>
                                    </div>
                                    <div className='order__details__tfb'>
                                        <div>Deliver before </div>
                                        <span> March 20, 2018</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-md-12' >
                                <span>Estimated total</span>
                            </div>

                            <div className='col-md-12' >
                                <p>Final price will be calculated based on your traveler's requested delivery fee.</p>
                            </div>
                        </div>

                            <div className='row' >
                                <div className='col-md-11' >
                                    <span>Item Price</span>
                                </div>
                                <div className='col-md-1' >
                                    <span>$<span>20</span></span>
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-md-11' >
                                    <span>Sale tax</span>
                                </div>
                                <div className='col-md-1' >
                                    <span>$<span>3</span></span>
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
                                    <span>Your delivery fee</span>
                                </div>
                                <div className='col-md-1' >
                                    <span>$<span>5</span></span>
                                </div>
                            </div>
                            <hr />
                            <div className='row' >
                                <div className='col-md-11' >
                                    <span>Total</span>
                                </div>
                                <div className='col-md-1' >
                                    <span>$<span>28</span></span>
                                </div>
                            </div>

                        </div>

                        <div className='row' >
                            <div className='col-md-12' >
                                 <h3>Shopper Details</h3>
                            </div>
                          
                        </div>

                        <div className='ToDelerState-details'>
                           

                            <div className='row' >
                                <div className='col-md-6' >
                                <img className='Order__maker-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                                    <span className='Order__maker-Name' >Abdelaleem</span>
                                </div>
                                <div className='col-md-6' >
                                    <div className='Order__time' >
                                        <div >
                                            <h1><span>$</span>68</h1>
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
                              <div className='shopper__details' >
                                    <div className='order__details__tfb' >
                                        <div>Deliver to </div>
                                        <span> Cairo, EG</span>
                                    </div>
                                    <div className='order__details__tfb'>
                                        <div>Deliver from </div>
                                        <span> New York,US </span>
                                    </div>
                                    <div className='order__details__tfb'>
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
                                      <button type="button" className="btn getly___btn  Update-State__btn"   data-toggle="modal" data-target="#updateState" > Update State</button>
                                </div>
                                
                            </div>
                             
                            <div class="modal fade" id="updateState" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Update State</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                    <input type="radio" name="S" value="A"/> Offer Accepted<br/>
                                       <input type="radio" name="S" value="B"/> Bought The Piece<br/>
                                       <input type="radio" name="S" value="C"/> Take The Plane<br/>
                                       <input type="radio" name="S" value="D"/> Meet The Shopper<br/>

                                    </div>
                                    <button type="button" class="btn btn-primary">Update</button>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>



                        </div> 
                    </div>
              
                
        );
    
    }
}

export default To_Delivers_State;


