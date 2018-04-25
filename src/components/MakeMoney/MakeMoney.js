import React, { Component } from 'react';
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
             
                <Header Serarchsowaction={this.Serarchsowhandler} />

                {this.state.Serarchsow ?
                    <Serarchorders/>  :
                    null
                    }
                   
              

                <RecentOrders />
                <RecentlyTrips />

               

                <Login />
                <Signup />
            </div>
        );
    }
}

export default MakeOrder;
