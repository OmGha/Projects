import React, { Component } from 'react';
import './RecentlyTrips.css';
import Trip from '../../shared/Trips/Trips';

class RecentlyTrips extends Component {
    render() {
        return (
           <section className='RecentlyTrips' >
               <div className='container' >

                    <div className='row'>
                        <h1 className='RecentlyTrips__tittle__h1'>These the Trips Recently added</h1>
                    </div>

                    <div className='row' >
                        <div className='col-md-6' >
                            <Trip />
                        </div>
                        <div className='col-md-6' >
                            <Trip />
                        </div>
                        <div className='col-md-6' >
                            <Trip />
                        </div>
                        <div className='col-md-6' >
                            <Trip />
                        </div>
                    </div>

               </div>
           </section>
        );
    }
}

export default RecentlyTrips;
