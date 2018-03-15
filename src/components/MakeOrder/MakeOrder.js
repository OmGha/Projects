import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Header from '../home/header/Header';
import HowToOrder from './HowToOrder/HowToOrder';
import RecentOrders from './RecentOrders/RecentOrders';

class MakeOrder extends Component {
    render() {
        return (
            <div>
                <NAVBER />
                <Header />
                <HowToOrder />
                <RecentOrders />
                
                <Footer />
            </div>
        );
    }
}

export default MakeOrder;
