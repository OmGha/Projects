import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Order.css';

class Order extends Component {


    constructor(props) {
        super(props);
       
            this.openOrder = this.openOrder.bind(this);

      }


      openOrder() {
       
         this.props.history.push(`/Orderdetail/${this.props.orderDate.Item_num}`);
         window.scrollTo(0, 0);
       
      }

    render() {
        if(!this.props.orderDate) { // or !this.props.user.profile depending on your initialState
            return null; 
         }

        return (
            <div>


                        <div className='Order'  >
                         <div className='row' >
                        <div className='col-md-6' >

                           {this.props.orderDate.Photo != null ?
                             <img className='Order__maker-img' src={this.props.orderDate.Photo}/> 
                              :
                            <img className='Order__maker-img' src="https://image.flaticon.com/icons/svg/265/265674.svg"/> 
                            }
                       
                            <span className='Order__maker-Name' >{this.props.orderDate.First_name}</span>
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

                        <div className='row' >
                        <div className='col-md-5' >
                            <div className='Oreder-image' >
                                <img className='Oreder-image__img' src={this.props.orderDate.Item_photo} />
                            </div>
                        </div>
                        <div className='col-md-7' >
                            <div  className='Oreder-name'>{this.props.orderDate.Item_name}</div>
                                <p>{this.props.orderDate.Description_item}</p>
                            <div className='oreder__details' >
                                <div className='oreder__details__tfb' >
                                    <div>Deliver to </div>
                                    <span>{this.props.orderDate.Getly_to}</span>
                                </div>
                                <div className='oreder__details__tfb'>
                                    <div>Deliver from </div>
                                    <span> <span>{this.props.orderDate.Getly_from}</span> </span>
                                </div>
                                <div className='oreder__details__tfb'>
                                    <div>Deliver before </div>
                                    <span><span>{this.props.orderDate.Getly_date}</span></span>
                                </div>

                            </div>
                        </div>
                        </div>



                        <div className='row' >
                        <div className='col-md-7'>
                            <span>Traveler fee</span>
                            <div>
                                <span>from 
                                    <span>
                                    <span>${this.props.orderDate.price_of_item*0.15}</span>
                                    </span>
                                </span>
                            </div>

                            <div>
                                <span>Item price: <span>${this.props.orderDate.price_of_item}</span></span>
                            </div>

                        </div>
                        <div className='col-md-5'>
                            <div>
                                <button type="button" className="btn getly___btn make-offer-btn" onClick={this.openOrder} >Show details</button>
                            </div>
                            <div>
                                <span>0 offers</span>
                            </div>
                        </div>
                        </div>

                        </div>




            </div>
           
        );
    }
}

export default withRouter(Order) ;
