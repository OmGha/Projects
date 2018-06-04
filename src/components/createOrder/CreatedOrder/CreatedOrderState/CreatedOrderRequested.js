import React, { Component } from 'react';
import $ from 'jquery';
import './CreatedOrder.css';
import Navbar from '../../../shared/nav/Navbar';
import Footer from '../../../shared/footer/Footer';




class CreatedOrderRequested extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.state={
            ordersData: [],
            DealsData: [],
            

        };
     
    }

    componentWillMount(){
        console.log('componentDidMount');
        
        const usertoken =  localStorage.getItem("usertoken");
        const orderID =  this.props.match.params.orderID ;
        console.log(`https://getlynow.herokuapp.com/auth/message`, usertoken , orderID);


        $.post( "https://getlynow.herokuapp.com/auth/getitembyid", {
            "token":usertoken,
            "id":orderID
        })
        .done(( data ) => {
            console.log(data);
            this.setState({ordersData:data})

            console.log(this.state.ordersData);
        }
      );

        $.post( "https://getlynow.herokuapp.com/auth/getDeals", {
            "token":usertoken,
            "state":"pendding",
            "item_id": orderID

        })
        .done(( data ) => {
            console.log(data);
            this.setState({DealsData:data})

            console.log(this.state.DealsData);
        }
      );

    }

    render() {
        return (
            <div>
                <div className='CreatedOrderComponent' >
                    <div className='container' >
                        <div className='row getly-step'>
                            <div className='col-md-4'>
                                <div>
                                    <img className='getly-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                    <span className='getly-step-text' >Order Published</span>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <img className='getly-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                    <span className='getly-step-text' >Receive offers</span>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <img className='getly-step-img' src={require(`../../../../Assets/img/shopping-bag.svg`)} />
                                    <span className='getly-step-text' >Accept One</span>
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


                                                                    {
                                                this.state.ordersData.length > 0
                                                    ? this.state.ordersData.map(order =>           
                                                        
                                                        <div key={order.Item_num} className='getly-details'>

                                                        <div className='row ' >
                                                        <div className='col-md-3' >
                                                            <div className='Oreder-image' >
                                                                <img className='Oreder-image__img' src={order.Item_photo} />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-9' >
                                                            <div  className='Oreder-name'> {order.Item_name}</div>
                                                             <span>{order.Description_item}</span>
                            
                                                            <div className='oreder__details' >
                                                                <div className='oreder__details__tfb' >
                                                                    <div>Deliver to </div>
                                                                    <span> {order.Getly_to}</span>
                                                                </div>
                                                                <div className='oreder__details__tfb'>
                                                                    <div>Deliver from </div>
                                                                    <span> {order.Getly_from} </span>
                                                                </div>
                                                                <div className='oreder__details__tfb'>
                                                                    <div>Deliver before </div>
                                                                    <span> {order.Getly_date}</span>
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
                                                                <span>$<span>{order.price_of_item}</span></span>
                                                            </div>
                                                        </div>
                                                        <div className='row' >
                                                            <div className='col-md-11' >
                                                                <span>Sale tax</span>
                                                            </div>
                                                            <div className='col-md-1' >
                                                                <span>$<span>0</span></span>
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
                                                      
                                                        <hr />
                                                        <div className='row' >
                                                            <div className='col-md-11' >
                                                                <span>Total</span>
                                                            </div>
                                                            <div className='col-md-1' >
                                                                <span>$<span>{order.price_of_item}</span></span>
                                                            </div>
                                                        </div>
                            
                                                    </div>
                                                 
                                                    )
                                                    : 'no order!'
                                            }



                        <div className='row' >
                            <div className='col-md-12' >
                                 <h3>Delivery offers</h3>
                            </div>
                          
                        </div>


                        
                        {
                                                this.state.DealsData.length > 0
                                                    ? this.state.DealsData.map(Deal =>           
                                                    
                                                        <div className='getly-details'>
                           

                                                        <div className='row' >
                                                            <div className='col-md-6' >
                                                            <img className='Order__maker-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                                                                <span className='Order__maker-Name' >Ahmed</span>
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
                                                                  <button type="button" className="btn getly___btn  accept-offer__btn"  > Accept Offer</button>
                                                            </div>
                                                        </div>
                            
                                                       
                                                    </div>
                                            
                                               )
                                                    : 'no Offers!'
                                            }







                    </div>
                </div>

            </div>
        );
    }
}

export default CreatedOrderRequested;


