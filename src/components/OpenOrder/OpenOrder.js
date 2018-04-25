import React, { Component } from 'react';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';
import Orderitem from './OrderItem/OrderItem';
import RecentOrders from '../MakeOrder/RecentOrders/RecentOrders';


class OpenOrder extends Component {
    render() {
        return (
            <div>
                

                <Orderitem />

                 <RecentOrders />

            
                <Login />
                <Signup />
            </div>
        );
    }
}

export default OpenOrder;
