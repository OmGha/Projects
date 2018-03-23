import React, { Component } from 'react';
import $ from "jquery";
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Header from './header/Header';
import WhyGetly from './whyGetly/whyGetly';
import HowToUse from './howToUse/HowToUse';
import PaymentWays from './paymentWays/PaymentWays';
import EarnMoney from './EarnMoney/EarnMoney';
import CompletedOrders from './CompletedOrders/CompletedOrders';
import Community from './community/Community';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';






class Home extends Component {

    constructor(props) {
        super(props);
   
        }

        componentDidMount(){

            if(localStorage.getItem("userloged")){
                console.log(localStorage.getItem("userloged"));
                $('.loged').hide();
                $('.login').show();
            }
        }


    
    render() {
        return (
            <div>
                <NAVBER/>
                <Header />
                <WhyGetly />
                <HowToUse />
                <PaymentWays />
                <EarnMoney />
                <CompletedOrders />
                <Community />
                <Footer />

                <Login  />
                <Signup />
            </div>
        );
    }
}

export default Home;
