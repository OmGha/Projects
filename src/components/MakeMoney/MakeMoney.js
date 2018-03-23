import React, { Component } from 'react';
import $ from "jquery";
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Header from './header/Header2';
import RecentOrders from '../MakeOrder/RecentOrders/RecentOrders';
import RecentlyTrips from './RecentlyTrips/RecentlyTrips';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';


class MakeOrder extends Component {



    render() {
        return (
            <div>
                <NAVBER />
                <Header />
                <RecentOrders />
                <RecentlyTrips />

                <Footer />

                <Login />
                <Signup />
            </div>
        );
    }
}

export default MakeOrder;
