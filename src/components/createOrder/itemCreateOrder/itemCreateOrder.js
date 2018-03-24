import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './itemCreateOrder.css';


class itemCreateOrder extends Component {
    render() {
        return(
            <div className="row">
                 <div className="items__container  offset-lg-3 col-lg-9 ">
                <div className="items__container__h1">
                    <h1>Get your item in 3 easy steps</h1>
                </div>
                <div className="items__container__steps">
                    <div className="items__container__step1">Tell us about your item</div>
                    <div className="items__container__step2">Tell us where it’s going</div>
                    <div className="items__container__step3">Checkout & delivery</div>
                </div>
                <div  className="items__container__h4"> 
                    <h4>Tell us about your item</h4>
                </div>
                <div className="items__container__h6">
                    <h6>If your item is available online, paste the purchase link below.</h6>
                </div>
                <div className="items__container__divForm">
                    <form className="items__container__form">
                        <input className=" items__container__form__input" type="text" placeholder="Your Link" />
                        <button className="btn getly___btn navbar__item__btn-create-oreder">Create</button>
                    </form>
                </div>
                <div className="details__manually">
                <a  href="#"> Add details manually</a>
                </div>
                
            </div>
      
            </div>
           
        );

    }
}

export default withRouter(itemCreateOrder);