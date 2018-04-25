import React, { Component } from 'react';
import Orderheader from './orderscomponents/orderheader/orderheader';
import OrderState from './orderscomponents/orderState/orderState';

class orders extends Component {
    render() {
        return (
            <div>
               

                   <Orderheader />
                   <OrderState />

            </div>
        );
    }
}

export default orders;
