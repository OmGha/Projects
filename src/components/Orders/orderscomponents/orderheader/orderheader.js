import React, { Component } from 'react';
import './orderheader.css';

class orderheader extends Component {
    render() {
        return (
            <section>
                    <div className='order__header'>
                            <div  className='order__header__layout'>
                            <div className="container" >
                            <div className='row'>
                                <div className='order__header__Elment offset-lg-2 col-lg-4'>Orders</div>
                            </div>
                            </div>
                           
                            </div>
                        </div>   
            </section>
        );
    }
}

export default orderheader;
