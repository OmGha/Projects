import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Header from './header/Header';
import WhyGetly from './whyGetly/whyGetly';
import HowToUse from './howToUse/HowToUse';

class Home extends Component {
    render() {
        return (
            <div>
                <NAVBER />
                <Header />
                <WhyGetly />
                <HowToUse />
                <Footer />
            </div>
        );
    }
}

export default Home;
