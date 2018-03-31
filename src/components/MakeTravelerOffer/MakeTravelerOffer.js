import React, { Component } from 'react';
import Navbar from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import TravelerOffer from './TravelerOffer/TravelerOffer';

class MakeTravelerOffer extends Component {
    render() {
        return (
            <div>
                <Navbar />
                    <TravelerOffer />
                <Footer />
            </div>
        );
    }
}

export default MakeTravelerOffer;
