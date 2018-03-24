import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';
import Itemcreatecrder from './itemCreateOrder/itemCreateOrder';
import Itemcreateordermanually from './itemCreateOrderManually/itemCreateOrderManually';


import { withRouter } from 'react-router-dom';

class createOrder extends Component {
    render() {
       
        return(
            <div>
              <NAVBER/>
              <Itemcreatecrder/>
              <Itemcreateordermanually/>

              <Login />
              <Signup />
              <Footer />
            </div>

        );

    }
}

export default createOrder;
