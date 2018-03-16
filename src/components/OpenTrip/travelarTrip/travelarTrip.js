import React, { Component } from 'react';
import './travelarTrip.css';

class travelarTrip extends Component {
    render() {
        return (
          <section className='trip-block' >
            <div className='trip-block__layout' >
                
            <div className='container' >
                <div className='row'>
                
                    <div className='col-md-4' >
                    <div className='trip-block__traveler'>
                                <img className='trip-block__traveler__img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                                    <span className='trip-block__traveler__name' >Ahmed</span>

                             
                     </div>

                             <div className="row">
                                        <div className="trip__traveler__rete" >
                                            <img src={require('../../../Assets/img/star.svg')}/>
                                            <img src={require('../../../Assets/img/star.svg')}/>
                                            <img src={require('../../../Assets/img/star.svg')}/>
                                            <img src={require('../../../Assets/img/star.svg')}/>
                                            <img src={require('../../../Assets/img/star.svg')}/>
                                        </div>
                                    </div>

               


                             <div className='row'>
                                <button type="button" className="btn getly___btn trip-block__traveler__request-btn">Request delivery</button>
                            </div>

                                
                    </div>
                    <div className='col-md-6' >

                                     <div className='trip__detailes' >

                                      <div className='trip__detailes__tfo'>
                                            <div>Traveler from : </div>
                                            <span> New York,US </span>
                                        </div>

                                        <div className='trip__detailes__tfo' >
                                            <div>Traveler to : </div>
                                            <span> Cairo, EG</span>
                                        </div>
                                       
                                        <div className='trip__detailes__tfo'>
                                            <div>Traveler before : </div>
                                            <span> March 20, 2018</span>
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

export default travelarTrip;
