import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Order.css';

class Order extends Component {


    constructor(props) {
        super(props);
       
            this.openOrder = this.openOrder.bind(this);

      }


      openOrder() {
       
         this.props.history.push('/Orderdetail');
         window.scrollTo(0, 0);
       
      }

    render() {
        return (
            
            
            <div className='Order' onClick={this.openOrder} >
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

                <div className='row' >
                    <div className='col-md-5' >
                         <div className='Oreder-image' >
                             <img className='Oreder-image__img' src={require('../../../Assets/img/iphone6s.jpg')} />
                        </div>
                    </div>
                    <div className='col-md-7' >
                         <div  className='Oreder-name'> Iphone 7s plus</div>

                         <div className='oreder__details' >
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
                </div>

                <div className=''>
                    <span>Where to buy </span>
                    <span>www.apple.com</span>
                </div>

                <div className='row' >
                    <div className='col-md-7'>
                        <span>Traveler fee</span>
                        <div>
                            <span>from 
                                <span>
                                  <span>$25</span>
                                </span>
                            </span>
                        </div>

                        <div>
                            <span>Item price: <span>$125</span></span>
                        </div>

                    </div>
                    <div className='col-md-5'>
                        <div>
                             <button type="button" className="btn getly___btn make-offer-btn" onClick={this.gomakeoffer} >Make Offer</button>
                        </div>
                        <div>
                            <span>2 offers</span>
                        </div>
                    </div>
                </div>

            </div>
            
            
         
        );
    }
}

export default withRouter(Order) ;
