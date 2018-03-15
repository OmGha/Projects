import React, { Component } from 'react';
import './RecentOrders.css';
import Order from '../../shared/Order/Order';

class RecentOrders extends Component {
    render() {
        return (
           <section className='recent-orders' >
               <div className='container'>
                    <div className='row' >
                        <h1 className='recent-orders__tittle__h1' >Recent Orders</h1>
                        <h4  className='recent-orders__tittle__h4'>See the Recent Orders , Make offer and earn money</h4>
                
                        <h4  className='recent-orders__tittle__h4'>get any thing from anywhare</h4>
                    </div>

                    <div className='row' >
                        <div className='col-md-6' >
                            <Order />
                        </div>
                        <div className='col-md-6' >
                            <Order />
                        </div>
                        <div className='col-md-6' >
                            <Order />
                        </div>
                        <div className='col-md-6' >
                            <Order />
                        </div>
                    </div>

                    <div className='row'>
                       <button type="button" className="btn getly___btn Show-more--order__btn">Show more orders</button>
                    </div>

               </div>
           </section>
        );
    }
}

export default RecentOrders;
