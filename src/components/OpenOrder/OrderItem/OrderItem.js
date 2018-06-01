import React, { Component } from 'react';
import $ from 'jquery'
import './OrderItem.css';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';


class Orderitem extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.state={
            ordersData: "",

        };
     
    }

    gomakeoffer = () =>{
        this.props.history.push(`/makeoffer/${this.state.ordersData.Item_num}`);
        window.scrollTo(0, 0);
      } 

    componentWillMount(){
        console.log('componentDidMount');
        
        const usertoken =  localStorage.getItem("usertoken");
        const orderID =  this.props.match.params.orderID;
        console.log(`https://getlynow.herokuapp.com/auth/getitembyid`, usertoken , orderID);

        $.post( "https://getlynow.herokuapp.com/auth/getitembyid", {
            "token":usertoken,
            "id":orderID
        })
        .done(( data ) => {
            console.log(data[0]);
            this.setState({ordersData:data[0]})

            console.log(this.state.ordersData);
        }
    );

        
    }


 

    render() {

               
        return (
            <section>

                <div className='container' >

                <div className='row' >
                    <div className='col-md-8' >

                    <div className='Order-detail' >
                            <div className='row' >
                                <img  className='Order-detail__img' src={this.state.ordersData.Item_photo}  />
                                </div>

                                <div className='row'>
                                    <h4  className='Order-detail__order-name'>{this.state.ordersData.Item_name}</h4>
                                </div>

                                <div className='row'>
                                    <p className="Order-detail__descraption" >{this.state.ordersData.Description_item} </p>
                                </div>

                    </div>

                    </div>

                    <div className='col-md-4' >

                    <div className='Order__maker' >
                    
                        <div className='row' >
                            <div className='col-md-6' >
                            {this.state.ordersData.Photo != null ?
                            <img className='Order__maker-img' src={this.state.ordersData.Photo} /> 
                                :
                            <img className='Order__maker-img' src="https://image.flaticon.com/icons/svg/265/265674.svg"/> 
                            }
                                <span className='Order__maker-Name' >{this.state.ordersData.First_name}</span>
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
                                            from <span>$  {Math.round(this.state.ordersData.price_of_item*0.15)}</span>
                                        </div>

                                        <div>Price for <span>1</span> item: <span>$ {this.state.ordersData.price_of_item}</span></div>

                                        <span>No Offre yet</span>

                                    </div>


                                </div>

                        <div className='row'>
                            <button type="button" className="btn getly___btn make-offer-btn" onClick={this.gomakeoffer} >Make Offer</button>
                        </div>

                        <hr/>

                        <div className='row'>

                                <div className='oreder__details__' >
                                    <div className='oreder__details__tfb' >
                                        <div>Deliver to </div>
                                        <span> {this.state.ordersData.Getly_to}</span>
                                    </div>
                                    <div className='oreder__details__tfb'>
                                        <div>Deliver from </div>
                                        <span> {this.state.ordersData.Getly_from} </span>
                                    </div>
                                    <div className='oreder__details__tfb'>
                                        <div>Deliver before </div>
                                        <span> {this.state.ordersData.Getly_date}</span>
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

export default withRouter(Orderitem);
