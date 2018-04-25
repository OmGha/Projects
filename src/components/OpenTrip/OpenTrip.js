import React, { Component } from 'react';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';
import TravelarTrip from './travelarTrip/travelarTrip';

class OpenTrip extends Component {
    render() {
        return (
            <div>
                
                <TravelarTrip />
                
                <Login />
                <Signup />
            </div>
        );
    }
}

export default OpenTrip;
