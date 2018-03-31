import React, { Component } from 'react';
import Navbar from '../../shared/nav/Navbar';
import Footer from '../../shared/footer/Footer';
import CreatedOrderComponent from './CreatedOrderComponent/CreatedOrderComponent';

class CreatedOrder extends Component {
    render() {
        return (
            <div>
                <Navbar />
                    <CreatedOrderComponent />
                <Footer />
            </div>
        );
    }
}

export default CreatedOrder;
