import React, { Component } from 'react';
import Header from './header/Header2';
import RecentOrders from '../MakeOrder/RecentOrders/RecentOrders';
import RecentlyTrips from './RecentlyTrips/RecentlyTrips';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';


class MakeOrder extends Component {

    constructor(props) {
        super(props);
     
    }
    

    render() {
        return (
            <div>
             
                <Header/>

              
                <RecentOrders />
                <RecentlyTrips />

               

                <Login />
                <Signup />
            </div>
        );
    }
}


export default MakeOrder;
