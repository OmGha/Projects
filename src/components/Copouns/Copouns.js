import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Discount from '../../Assets/img/discount.svg';
import '../Copouns/Copouns.css'

class Copouns extends Component{
    render() {
        return (
            <div>
                <NAVBER/>
                <div className='Container' id='conCoupon'>
                    <div className='Coupon__Conatiner'>
                        <div className='Coupon__Header'>Coupon<span><img className='Coupon__img' src={Discount}/></span></div>
                        <label>Add a new Coupon</label>
                        <div className='Coupon__Section'>
                            <form>
                                <div class="form-row align-items-center">
                                    <div class="col-sm-9">
                                    <label class="sr-only" for="inlineFormInputGroup">Coupon</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">Your Coupon Here</div>
                                        </div>
                                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter New Coupon Code"/>
                                    </div>
                                    </div>
                                    <div class="col-sm-3">
                                    <button type="submit" class="btn btn-primary mb-2" id='btn__Submit__Coupon'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <label>Available Coupons</label>
                        <div className='Coupon__Section' id='elementContainer'>
                            <div className='Coupon__Element'>$10 Coupon From Abdel-Aleem</div>
                            <div className='Coupon__Element'>$10 Coupon From Abdel-Aleem</div>
                            <div className='Coupon__Element'>$10 Coupon From Abdel-Aleem</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Copouns;