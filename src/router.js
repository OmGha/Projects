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
import AddTrip from './components/Deliveries/AddTrip/AddTrip';
import AddTrip_Info from './components/Deliveries/AddTrip_Info/AddTrip_Info';
import orders from './components/Orders/orders';
import CreatedOrderRequested from './components/createOrder/CreatedOrder/CreatedOrderState/CreatedOrderRequested';
import CreatedOrderReceived from './components/createOrder/CreatedOrder/CreatedOrderState/CreatedOrderReceived';
import CreatedOrderOntheway from './components/createOrder/CreatedOrder/CreatedOrderState/CreatedOrderOntheway';


class Router extends Component {
     

    render() {


        localStorage.setItem("userloged", false);

        return (

            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}  />
                    <Route path="/order" component={MakeOrder}   />
                    <Route path="/travel" component={MakeMoney}  />
                    <Route path="/Orderdetail" component={OpenOrder}    />
                    <Route path="/tripdetail" component={OpenTrip}   />
                    <Route path="/signup" component={uplodeProfilePic}  />
                    <Route path="/createOrder" component={createOrder}   />
                    <Route path="/deliveries" component={Deliveries}   />
                    <Route path="/makeoffer" component={MakeTravelerOffer}   />
                    <Route path='/getlyrequested' component={CreatedOrderRequested}/>
                    <Route path='/getlyreceived' component={CreatedOrderReceived}/>
                    <Route path='/getlyontheway' component={CreatedOrderOntheway}/>
                    <Route path="/editNavigate" component={editNavigate}   />
                    <Route path="/AddTrip" component={AddTrip}   />
                    <Route path="/AddTrip_Info" component={AddTrip_Info}   />
                    <Route path="/requestsorder" component={orders}   />
                                                            
                </div>
            </BrowserRouter>

        );
    }
}

export default Router;
