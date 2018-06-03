import React, { Component } from 'react';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Deliveries/Deliveries.css';


class Deliveries extends Component {

    constructor(props) {
        super(props);
       
            this.trip = this.trip.bind(this);
            this.openInfo=this.openInfo.bind(this);

      }
    
      trip() {
       
         this.props.history.push('/addTrip');
         window.scrollTo(0, 0);
       
      }
      openInfo(){
        this.props.history.push('/addTrip_Info');
        window.scrollTo(0, 0);
      }

    render() {
        return (
            <div>
                             
                <div className='Deliveries__Container'>
                <div  className='Deliveries__Container2'>
                <div className="container">
                    <div className='row'>
                        <div className='Deliveries__Container__Elment offset-lg-2 col-lg-4'>Deliveries</div>
                        <button type='button' onClick={this.trip} className='Deliveries__Container__btn getly___btn col-lg-4 '>Add Trip</button>
                    </div>
                </div>                   
                </div>
                 
            </div>   
            <div className='display__dilev'>
                <div className='display__dilev__cont'>
                    <span>Add your trip to make multiple offers and earn more money.</span>
                    <div className='typeOfTrips__Cont'>
                          <div className='typeOfTrips__Cont__UpcomingTitle'>
                              <span>Upcoming Trips</span>
                          </div>
                            <div className='a 'onClick={this.openInfo} >
                                <div className='Upcoming__Cont row'>
                                    <div className='Upcoming__Cont__Photo col-4'></div>
                                    <div className='Upcoming__Cont__Content col-8 '>
                                        <div className='Upcoming__Cont__Content__Info'>
                                            <div className='Upcoming__Cont__Content__Info__Place'>
                                                <span title='Cairo'>Cairo -</span>
                                                <span title='New York'>New York</span>
                                            </div>
                                            <div className='Upcoming__Cont__Content__Info__Date'><span>March 23, 2018</span></div>
                                        </div>
                                        <div className='Upcoming__Cont__Content__Details  '>
                                         <hr/>
                                         <div className='Upcoming__Cont__Content__Details__Divs row'>
                                             <div className='Upcoming__Cont__Content__Details__Divs__Div1 col-4'>
                                                 <div className='Upcoming__Cont__Content__Details__Divs__Div2__Orders'>
                                                     <div className='num'><span>1</span></div>
                                                     <div className='tex'><span>Orders</span></div>
                                                 </div>
                                             </div>
                                             <div className='Upcoming__Cont__Content__Details__Divs__Div2 col-4'>
                                                <div className='Upcoming__Cont__Content__Details__Divs__Div2__ToDeliver'>
                                                        <div className='num'><span>0</span></div>
                                                        <div className='tex'><span>To Deliver</span></div>
                                                    </div>
                                                </div>
                                             <div className='Upcoming__Cont__Content__Details__Divs__Div3 col-4'>
                                                <div className='Upcoming__Cont__Content__Details__Divs__Div2__Earnings'>
                                                        <div className='num'><span>$ 0</span></div>
                                                        <div className='tex'><span>Earnings</span></div>
                                                    </div>
                                             </div>
                                         </div>
                                        </div>
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

export default withRouter(Deliveries) ;

