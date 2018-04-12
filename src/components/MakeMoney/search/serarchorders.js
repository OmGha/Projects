import React, { Component } from 'react';
import Order from '../../shared/Order/Order';


class Serarchorders extends Component {
    render() {
        return (
            <section className='RecentlyTrips' >
               <div className='container' >

                     <div className='row'>
                       <h1 className='RecentlyTrips__tittle__h1'>ORDERS</h1>
                      </div>

                      <div className='row' >
                        <div className='col-md-12' >
                            <Order />
                        </div>
                        <div className='col-md-12' >
                            <Order />
                        </div>
                        <div className='col-md-12' >
                            <Order />
                        </div>
                        <div className='col-md-12' >
                            <Order />
                        </div>
                    </div>

                

            </div>
        </section>
        );
    }
}

export default Serarchorders;
