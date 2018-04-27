import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';

import CreateOrderContainer from './CreateOrderContainer/createOrderContainer';

class createOrder extends Component {
    render() {
       
        return(
            <div>
             
                 <CreateOrderContainer   />
            

               <Login />
               <Signup />
            </div>

        );

    }
}

export default createOrder;
