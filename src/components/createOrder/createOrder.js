import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';

import CreateOrderContainer from './CreateOrderContainer/createOrderContainer';

class createOrder extends Component {
    render() {
       
        return(
            <div>
              <NAVBER/>
                 <CreateOrderContainer   />
              <Footer />    

               <Login />
              <Signup />
            </div>

        );

    }
}

export default createOrder;
