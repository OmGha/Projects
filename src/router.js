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
import conversations from './components/conversations/conversations';
import openconversations from './components/conversations/openConversation/openConversation';
import Deliveries from './components/Deliveries/Deliveries';
import MakeTravelerOffer from './components/MakeTravelerOffer/MakeTravelerOffer';
import AddTrip from './components/Deliveries/AddTrip/AddTrip';
import AddTrip_Info from './components/Deliveries/AddTrip_Info/AddTrip_Info';
import orders from './components/Orders/orders';
import CreatedOrderRequested from './components/createOrder/CreatedOrder/CreatedOrderState/CreatedOrderRequested';
import CreatedOrderReceived from './components/createOrder/CreatedOrder/CreatedOrderState/CreatedOrderReceived';
import CreatedOrderOntheway from './components/createOrder/CreatedOrder/CreatedOrderState/CreatedOrderOntheway';
import OfferState from './components/Deliveries/Offers/OfferState/OfferState';
import To_Delivers_State from './components/Deliveries/To_Delivers/To_Delivers_State/To_Delivers_State';
import DeliveredState from './components/Deliveries/Delivered/DeliveredState/DeliveredState';
import User from './components/User/User';
import Navbar from './components/shared/nav/Navbar';
import Footer from './components/shared/footer/Footer';
import serarchorders from './components/search/serarchorders';
import uploadProfilePic from './components/shared/Signup/uplodeProfilePic/UploadProfilePic/UploadProfilePicComponent'
import editProfile from './components/editProfile/editProfile';

class Router extends Component {
     

    render() {

        return (

            <BrowserRouter>
             <div>
                <Navbar />
               
                    <Route exact path="/" component={Home}  />
                    <Route path="/order" component={MakeOrder}   />
                    <Route path="/travel" component={MakeMoney}  />
                    <Route path="/Orderdetail/:orderID" component={OpenOrder}    />
                    <Route path="/tripdetail" component={OpenTrip}   />
                    <Route path="/signup" component={uplodeProfilePic}  />
                    <Route path="/createOrder" component={createOrder}   />
                    <Route path="/deliveries" component={Deliveries}   />
                    <Route path="/makeoffer/:orderID" component={MakeTravelerOffer}   />
                    <Route path='/getlyrequested/:orderID' component={CreatedOrderRequested}/>
                    <Route path='/getlyreceived' component={CreatedOrderReceived}/>
                    <Route path='/getlyontheway' component={CreatedOrderOntheway}/>
                    <Route path="/editNavigate" component={editNavigate}   />
                    <Route path="/addTrip" component={AddTrip}   />
                    <Route path="/addTrip_Info" component={AddTrip_Info}   />
                    <Route path="/requestsorder" component={orders}   />
                    <Route path="/OfferState" component={OfferState}   />
                    <Route path="/ToDeliverState" component={To_Delivers_State}   />
                    <Route path="/finditem/:from/:to" component={serarchorders}   />
                    <Route path="/Copouns" component={Copouns}   />
                    <Route path="/conversations" component={conversations}   />
                    <Route path="/openconv/:orderID" component={openconversations}   />
                    <Route path="/user" component={User}   />
                    <Route path="/editProfile" component={editProfile}   />
                    <Route path="/uploadProfilePic" component={uploadProfilePic}   />

                    <Footer />
                </div>
              
            </BrowserRouter>

        );
    }
}

export default Router;
