import React, { Component } from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';
import $ from "jquery";

import Home from './components/home/Home';
import MakeOrder from './components/MakeOrder/MakeOrder';
import MakeMoney from './components/MakeMoney/MakeMoney';
import OpenOrder from './components/OpenOrder/OpenOrder';
import OpenTrip from './components/OpenTrip/OpenTrip';
import uplodeProfilePic from './components/shared/Signup/uplodeProfilePic/uplodeProfilePic';
import createOrder from './components/createOrder/createOrder';
import editProfile from './components/editProfile/editProfile';


import Deliveries from './components/Deliveries/Deliveries';
import MakeTravelerOffer from './components/MakeTravelerOffer/MakeTravelerOffer';
import CreatedOrder from './components/createOrder/CreatedOrder/CreatedOrder'


class Router extends Component {

   
  
  
     

    render() {


        localStorage.setItem("userloged", false);

        return (

            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}  />
                    <Route path="/order" component={MakeOrder}   />
                    <Route path="/travel" component={MakeMoney}  />
                    <Route path="/OrderItem" component={OpenOrder}    />
                    <Route path="/trip" component={OpenTrip}   />
                    <Route path="/signup" component={uplodeProfilePic}  />
                    <Route path="/createOrder" component={createOrder}   />
                    <Route path="/editProfile" component={editProfile}   />
                    <Route path="/travelerTrip" component={Deliveries}   />
                    <Route path="/TravelerOffer" component={MakeTravelerOffer}   />
                    <Route path='/getly' component={CreatedOrder}    />


                    
                </div>
            </BrowserRouter>

        );
    }
}

export default Router;
