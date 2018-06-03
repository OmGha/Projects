import React, { Component } from 'react';
import Discount from '../../Assets/img/discount.svg';
import '../Copouns/Copouns.css'

class conversations extends Component{
    render() {
        return (
            <div>
                <div className='Container' id='conCoupon'>
                    <div className='Coupon__Conatiner'>
                        <div className='Coupon__Header'>conversations</div>
                        <label></label>
                        <div className='Coupon__Section'>
                            <form>
                                <div className="form-row align-items-center">
                                    <div className="col-sm-9">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup"></label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                        <div className="input-group-text">find user</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter name"/>
                                    </div>
                                    </div>
                                    <div className="col-sm-3">
                                    <button type="submit" className="btn btn-primary mb-2" id='btn__Submit__Coupon'>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <label>6 CONVERSATIONS</label>
                        <div className='Coupon__Section' id='elementContainer'>
                            <div className='Message__Element'>
                                  <div className="row" >
                                        <div className="col-1">
                                        <img className='nav__profile__img' src='https://randomuser.me/api/portraits/men/11.jpg' />
                                        </div>
                                        <div className="col-10 Message__Element__body">
                                        Ahmed Shibob <span>April 6,2018</span>
                                        <p>Hi, Ahmed, I am traveling to Paris and can bring your grab on August 26, 2018. As soon as you accept my offer I 
                                            can purchase the item and get it to you on time. Let me know
                                            if there is anything else you want from Dubai.</p>
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

export default conversations;