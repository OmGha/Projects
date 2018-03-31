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
import editNavigate from './components/editNavigate/editNavigate';
import Copouns from './components/Copouns/Copouns';


import Deliveries from './components/Deliveries/Deliveries';
import MakeTravelerOffer from './components/MakeTravelerOffer/MakeTravelerOffer';
import CreatedOrder from './components/createOrder/CreatedOrder/CreatedOrder'


import AddTrip from './components/Deliveries/AddTrip/AddTrip';
import AddTrip_Info from './components/Deliveries/AddTrip_Info/AddTrip_Info';


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
                    <Route path="/travelerTrip" component={Deliveries}   />
                    <Route path="/TravelerOffer" component={MakeTravelerOffer}   />
                    <Route path='/getly' component={CreatedOrder}    />
                    <Route path="/editNavigate" component={editNavigate}   />
                    <Route path="/Deliveries" component={Deliveries}   />
                    <Route path="/AddTrip" component={AddTrip}   />
                    <Route path="/AddTrip_Info" component={AddTrip_Info}   />


                                                            
                </div>
            </BrowserRouter>

        );
    }
}

export default Router;
