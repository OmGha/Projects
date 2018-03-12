import React, { Component } from 'react';
import './CompletedOrderComponent.css';

class CompletedOrderComponent extends Component {
    render() {
        return (
            <div className='Completed-Order1'>
                <div className='row'>
                    <div className='col'>
                        <div className='Completed-Order__parson'>
                           <img className='Completed-Order__parson__img' src='https://randomuser.me/api/portraits/men/11.jpg' />
                           <h6 className='Completed-Order__parson__name' >Ahmed</h6>
                           <span className='Completed-Order__parson__country' >United States of America</span>
                        </div>
                       

                    </div>
                    <div className='col'>
                        <div className='Completed-Order__trip' >
                            <img className='Completed-Order__trip__img' src={require('../../../../Assets/img/black-plane.svg')} />
                            <span className='Completed-Order__trip__date' >may 12</span>
                        </div>
                    </div>
                    <div className='col'>
                       <div>
                           <img className='Completed-Order__parson__img' src= 'https://randomuser.me/api/portraits/men/88.jpg' />
                           <h6 className='Completed-Order__parson__name'>Omar</h6>
                           <span className='Completed-Order__parson__country' >United Arab Emirates</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='row '>
                    <div className='col-sm-8'>
                      <span className='Completed-Order__order__name' >
                       Converse Classic Chucks Shoes
                      </span>
                    </div>
                    <div className='col-sm-4'>
                        <img className='Completed-Order__order__img' src='https://images.nike.com/is/image/DotCom/PDP_HERO_ZOOM/M9697_410_A_PREM/converse-chuck-taylor-all-star-low-top-unisex-shoe.jpg' />
                    </div>
                </div>
                 <hr />
                 <div className="row">
                    <div className="completed-Order__rate" >
                        <img src={require('../../../../Assets/img/star.svg')}/>
                        <img src={require('../../../../Assets/img/star.svg')}/>
                        <img src={require('../../../../Assets/img/star.svg')}/>
                        <img src={require('../../../../Assets/img/star.svg')}/>
                        <img src={require('../../../../Assets/img/star.svg')}/>
                    </div>
                 </div>

                 <div className='row'>
                    <div className ="completed-Order__traveler" > 
                        <span className="completed-Order__traveler__textfee" >Traveler fee is <span className='completed-Order__traveler__textfeemoney' >$15</span></span>
                    </div>
                 </div>

            </div>
        );
    }
}

export default CompletedOrderComponent;
