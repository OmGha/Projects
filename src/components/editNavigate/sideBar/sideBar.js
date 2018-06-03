import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../sideBar/sideBar.css';
import Photos from '../Photos/Photos';
import EditProfile from '../editProfile/editProfile';
import PaymentNPayouts from '../paymentNPayouts/PaymentNPayouts';


class SideBar extends Component {

    constructor(props) {
        super(props);
       
            this.viewP = this.viewP.bind(this);

      }

      viewP(){
        this.props.history.push('/user');
        window.scrollTo(0, 0);
      }

    render(){
        return(
            <div className="sidebar-div" >
                <div className="row">
                    <div className="col-3">
                        <div className= "Profile__Side__Nav nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link Profile__element active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Edit Profile</a>
                        <a className="nav-link Profile__element" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Photos</a>
                        <a className="nav-link Profile__element" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Payment & PayOut</a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><EditProfile/></div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Photos/></div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><PaymentNPayouts/></div>
                        </div>
                    </div>
                    </div>

             <editProfile/>

                                    <div onClick={this.viewP} className='btn__Div'><a className='btn btn-block space-top-4' href='#'>View Profile</a></div>


            </div>
      
                
        )
    }
}

export default withRouter(SideBar) ; 