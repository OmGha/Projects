import React, { Component } from 'react';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../MenuSetting/MenuSetting.css';


class MenuSetting extends Component {
    constructor(props) {
        super(props);
       
            this.deliv = this.deliv.bind(this);
            this.profile = this.profile.bind(this);


      }
    
      deliv() {
       
         this.props.history.push('/Deliveries');
         window.scrollTo(0, 0);
       
      }

      profile() {
       
        this.props.history.push('/editProfile');
        window.scrollTo(0, 0);
      
     }
    render() {
        return (
            <div className='Menu__Container'>
                <div>
                   <a className='Menu__Profile' onClick={this.profile}><span>Edit Profile</span> <img/> </a>
                   <a className='Menu__Profile'  onClick={this.deliv} ><span>Deliveries</span> <img/> </a>
                   <a className='Menu__Profile'><span>Account Setting</span> <img/> </a>
                   <a className='Menu__Profile'><span>My Guidebook</span> <img/> </a>
                   <a className='Menu__Profile'><span>Gift Cards</span> <img/> </a>
                   <a className='Menu__Profile'><span>Log Out</span> <img/> </a>
                </div>
            </div>
        );
    }
}

export default withRouter(MenuSetting);

