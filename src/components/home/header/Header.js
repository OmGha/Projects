import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Header.css';





class Header extends Component {
    constructor(props) {
        super(props);
       
            this.crOr = this.crOr.bind(this);

      }
    
      crOr() {
       
         this.props.history.push('/createOrder');
         window.scrollTo(0, 0);
       
      }
    render() {
       
        return (
    
            <div className="header" >
               <div className="slideshow">
                    <div  className="slideshow-image" ></div>
                    <div className="slideshow-image" ></div>
                    <div className="slideshow-image" ></div>
                    <div className="slideshow-image" ></div> 
                </div>
                <div className="header__layer">
                    <div className="header__box">
                        <div className="header__box__text">
                            <h1 className="header__box__text__h1">Nothing is out of reach.
                             Obtaining your need, wherever it is in the world, is no longer a concern because we are providing you an environment full of travelers willing to help you reach
                            </h1>
                        </div>
                        <div className="header__box__create-order row">
                          <div  className="col-md-10 header__box__create-order__row">
                              <input className="form-control form-control-lg header__box__create-order__input" type="text" placeholder="Paste URL or type what you’re looking for" />
                          </div>
                          <div  className="col-md-2 header__box__create-order__row1">
                               <button to={{pathname: '/createOrder'}} onClick={this.crOr} type="button" className="btn getly___btn header__box__create-order__btn">Create Oreder</button>
                          </div>

                        </div>
                    </div>
                </div>
               

              

            </div>
        );
    }
}

export default withRouter(Header) ;
