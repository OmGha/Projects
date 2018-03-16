import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';
import TravelarTrip from './travelarTrip/travelarTrip';

class OpenTrip extends Component {
    render() {
        return (
            <div>
                <NAVBER />
                <TravelarTrip />
                <Footer />
                <Login />
                <Signup />
            </div>
        );
    }
}

export default OpenTrip;
