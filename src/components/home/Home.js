import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from "jquery";
import Header from './header/Header';
import WhyGetly from './whyGetly/whyGetly';
import HowToUse from './howToUse/HowToUse';
import PaymentWays from './paymentWays/PaymentWays';
import EarnMoney from './EarnMoney/EarnMoney';
import CompletedOrders from './CompletedOrders/CompletedOrders';
import Community from './community/Community';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';
import MenueSetting from '../shared/MenuSetting/MenuSetting'
import Message_notification from '../shared/message/message_notification';

class Home extends Component {

    constructor(props) {
        super(props);
        }    

    render() {
      
        return (
            <div>
              
                <Header />
                <WhyGetly />
                <HowToUse />
                <PaymentWays />
                <EarnMoney />
                <CompletedOrders />
                <Community />

                <Login  />
                <Signup />
            </div>
        );
    }
}

export default withRouter(Home);
