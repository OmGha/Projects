import React, { Component } from 'react';
import Header from '../home/header/Header';
import HowToOrder from './HowToOrder/HowToOrder';
import RecentOrders from './RecentOrders/RecentOrders';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';

class MakeOrder extends Component {
    render() {
        return (
            <div>
               
                <Header />
                <HowToOrder />
                <RecentOrders />
               
                <Login />
                <Signup />
            </div>
        );
    }
}

export default MakeOrder;
