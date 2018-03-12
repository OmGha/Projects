import React, { Component } from 'react';
import './CompletedOrders.css';
import CompletedOrderComponent from './CompletedOrdersComponent/CompletedOrderComponent';

class CompletedOrders extends Component {
    render() {
        return (
            <section className='Completed-Order' >
                <div className="container">
                    <div className='row' >
                        <div className='Completed-Order__text'>
                            <h1 className='Completed-Order__text__h1' >
                                 Completed Orders
                            </h1>
                            <h5 className='Completed-Order__text__h5' >
                                 These items were delivered Safely, quickly and luxury items.
                            </h5>
                        </div>
                    </div>

                    <div className='row' >
                        <div className="col-md" >
                              <CompletedOrderComponent />
                        </div>
                        <div className="col-md" >
                              <CompletedOrderComponent />
                        </div>
                        <div className="col-md" >
                              <CompletedOrderComponent />
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default CompletedOrders;
