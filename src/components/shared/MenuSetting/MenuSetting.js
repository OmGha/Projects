import React, { Component } from 'react';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../MenuSetting/MenuSetting.css';


class MenuSetting extends Component {
    render() {
        return (
            <div className='Menu__Container'>
                <div>
                   <a className='Menu__Profile'><span>Edit Profile</span> <img/> </a>
                   <a className='Menu__Profile'><span>Travel Credit</span> <img/> </a>
                   <a className='Menu__Profile'><span>Account Setting</span> <img/> </a>
                   <a className='Menu__Profile'><span>My Guidebook</span> <img/> </a>
                   <a className='Menu__Profile'><span>Gift Cards</span> <img/> </a>
                   <a className='Menu__Profile'><span>Log Out</span> <img/> </a>
                </div>
            </div>
        );
    }
}

export default MenuSetting;

