import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Trips.css';

class Trip extends Component {

    constructor(props) {
        super(props);
       
            this.openTrip = this.openTrip.bind(this);

      }
    
      openTrip() {
       
         this.props.history.push('/tripdetail');
         window.scrollTo(0, 0);
       
      }


    render() {
        return (
            <div className='trip' onClick={this.openTrip} >
               <div className='row' >
                    <div className='trip__traveler'>
                        <img alt='hello' className='trip__traveler__img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                        <span className='trip__traveler__Name' >Ahmed</span>
                    </div>
               </div>

                
              <div className='row' >
                <div className='col-md-12' >
                    <div className='trip__deteils' >


                            <div className='trip__deteils__tfo'>
                                 <div>Traveling from </div>
                                 <span> New York,US </span>
                             </div>

                            <div className='trip__deteils__tfo' >
                                 <div>Traveling to </div>
                                 <span> Cairo, EG</span>
                             </div>
                             
                             <div className='trip__deteils__tfo'>
                                 <div>Traveling on </div>
                                 <span> March 20, 2018</span>
                             </div>

                    </div>
                </div>
              </div>

              <div className='row'>
                  <button type="button" className="btn getly___btn trip__request-delivery__btn ">Request delivery</button>
              </div>

            </div>
        );
    }
}

export default withRouter(Trip) ;
