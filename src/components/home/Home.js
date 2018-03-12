import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Header from './header/Header';
import WhyGetly from './whyGetly/whyGetly';
import HowToUse from './howToUse/HowToUse';
import PaymentWays from './paymentWays/PaymentWays';
import EarnMoney from './EarnMoney/EarnMoney';
import CompletedOrders from './CompletedOrders/CompletedOrders';
import Community from './community/Community';

class Home extends Component {
    render() {
        return (
            <div>
                <NAVBER />
                <Header />
                <WhyGetly />
                <HowToUse />
                <PaymentWays />
                <EarnMoney />
                <CompletedOrders />
                <Community />
                <Footer />
            </div>
        );
    }
}

export default Home;
