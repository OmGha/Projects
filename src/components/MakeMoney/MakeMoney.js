import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import Header from './header/Header2';
import RecentOrders from '../MakeOrder/RecentOrders/RecentOrders';
import RecentlyTrips from './RecentlyTrips/RecentlyTrips';
import Login from '../shared/Login/Login';
import Signup from '../shared/Signup/Signup';
import Serarchorders from './search/serarchorders';


class MakeOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Serarchsow: false,
          };
    }
    
    Serarchsowhandler = ()=>{
        this.setState({
            Serarchsow: true
        });
        console.log('clicked');
        
    }


    render() {
        return (
            <div>
                <NAVBER />
                <Header Serarchsowaction={this.Serarchsowhandler} />

                {this.state.Serarchsow ?
                    <Serarchorders/>  :
                    null
                    }
                   
              

                <RecentOrders />
                <RecentlyTrips />

                <Footer />

                <Login />
                <Signup />
            </div>
        );
    }
}

export default MakeOrder;
