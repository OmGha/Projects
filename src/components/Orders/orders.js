import React, { Component } from 'react';
import Navbar from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Orderheader from './orderscomponents/orderheader/orderheader';
import OrderState from './orderscomponents/orderState/orderState';

class orders extends Component {
    render() {
        return (
            <div>
                <Navbar />

                   <Orderheader />
                   <OrderState />

                <Footer />
            </div>
        );
    }
}

export default orders;
