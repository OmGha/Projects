import React, { Component } from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';
import Home from './components/home/Home';
import MakeOrder from './components/MakeOrder/MakeOrder';
import MakeMoney from './components/MakeMoney/MakeMoney';


class Router extends Component {
    render() {
        return (

            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/order" component={MakeOrder}/>
                    <Route path="/travel" component={MakeMoney}/>
                </div>
            </BrowserRouter>

        );
    }
}

export default Router;
