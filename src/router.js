import React, { Component } from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';
import { hashHistory } from 'react-router';
import $ from "jquery";

import Home from './components/home/Home';
import MakeOrder from './components/MakeOrder/MakeOrder';
import MakeMoney from './components/MakeMoney/MakeMoney';
import OpenOrder from './components/OpenOrder/OpenOrder';
import OpenTrip from './components/OpenTrip/OpenTrip';
import uplodeProfilePic from './components/shared/Signup/uplodeProfilePic/uplodeProfilePic';
import createOrder from './components/createOrder/createOrder';



class Router extends Component {


  
  

    render() {
        return (

            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}  />
                    <Route path="/order" component={MakeOrder}/>
                    <Route path="/travel" component={MakeMoney}/>
                    <Route path="/OrderItem" component={OpenOrder}  />
                    <Route path="/trip" component={OpenTrip}  />
                    <Route path="/signup" component={uplodeProfilePic}  />
                    <Route path="/OrderItem" component={OpenOrder} />
                    <Route path="/trip" component={OpenTrip} />
                    <Route path="/createOrder" component={createOrder} />

                    
                </div>
            </BrowserRouter>

        );
    }
}

export default Router;
