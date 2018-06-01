import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../MenuSetting/MenuSetting.css';


class MenuSetting extends Component {
    constructor(props) {
        super(props);
       
            this.deliv = this.deliv.bind(this);
            this.profile = this.profile.bind(this);

      }

      goOrder = ()=>{
        this.props.history.push('/requestsorder');
        window.scrollTo(0, 0);
      }
    
      deliv() {
       
         this.props.history.push('/Deliveries');
         window.scrollTo(0, 0);
       
      }

      profile() {
       
        this.props.history.push('/editNavigate');
        window.scrollTo(0, 0);
      
     }

     funlogout = () =>{
        this.props.dispatch({type: "LOGOUT"});
        console.log( this.props.loged);
        $('.Menu__Container').hide();
        localStorage.removeItem("usertoken");
        localStorage.removeItem('loged');
        this.props.history.push('/');

     }
 

    render() {
        return (
            <div className='Menu__Container'>
                <div>
                   <a className='Menu__Profile' onClick={this.profile}><span>Edit Profile</span> <img/> </a>
                   <a className='Menu__Profile' onClick={this.goOrder} ><span>Orders</span> <img/> </a>
                   <a className='Menu__Profile'  onClick={this.deliv} ><span>Deliveries</span> <img/> </a>
                   <a className='Menu__Profile'><span>Account Setting</span> <img/> </a>
                   <a className='Menu__Profile'><span>My Guidebook</span> <img/> </a>
                   <a className='Menu__Profile'><span>Gift Cards</span> <img/> </a>
                   <a className='Menu__Profile' onClick={this.funlogout}  ><span>Log Out</span> <img/> </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>(
    {
        loged: state.loged 
    }
  )
  

export default withRouter(connect(mapStateToProps)(MenuSetting));

