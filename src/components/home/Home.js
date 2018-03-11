import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Header from './header/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <NAVBER />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Home;
