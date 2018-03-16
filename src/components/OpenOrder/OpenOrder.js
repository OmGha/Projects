import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';
import Orderitem from './OrderItem/OrderItem';
import RecentOrders from '../MakeOrder/RecentOrders/RecentOrders';


class OpenOrder extends Component {
    render() {
        return (
            <div>
                <NAVBER />

                <Orderitem />

                 <RecentOrders />

                <Footer />

                <Login />
                <Signup />
            </div>
        );
    }
}

export default OpenOrder;
