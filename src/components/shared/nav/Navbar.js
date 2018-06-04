import '../nav/Navbar.css';
import shoppingbag from '../../../Assets/img/shopping-bag.svg';
import travlerplane from '../../../Assets/img/black-plane.svg';
import MenueSetting from '../MenuSetting/MenuSetting'
import Message_notification from '../message/message_notification';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';




class NAVBER extends Component {

  constructor(props) {
    super(props);
   
        this.showMenu = this.showMenu.bind(this);
        this.showMessage = this.showMessage.bind(this);

      
  }

  gocreateorder = () => {
             
    this.props.history.push('/createOrder');
    window.scrollTo(0, 0);
  }

  showMessage() {
       
    $('.Message__Notify').toggle();
    $('.Menu__Container').hide();
   
  
 }


  showMenu() {
       
    $('.Menu__Container').toggle();
    $('.Message__Notify').hide();

 }

 componentWillMount(){
   console.log(" componentWillMount nav");
   
   console.log(this.props.loged);
 }




    render() {

    
        return (
        <nav className="navbar navbar1 navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to='/'>Getly</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
               
              </ul>

              <ul className="navbar-nav  mt-2 mt-lg-0">

               <li className="nav-item">
                 <Link className="nav-link" to={{pathname: '/order'}}><img className="navbar__item__img" src={shoppingbag} /> Make Order</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={{pathname: '/travel'}}><img className="navbar__item__img" src={travlerplane} /> Make Money</Link>
                </li>
                {
                 this.props.loged ? null : <li className="nav-item unloged" >
                  <a className= 'nav-link' href="#"  data-toggle="modal" data-target="#SignupModel" >Sign Up</a>
                 </li>
                 
                }

                {
                 this.props.loged ? null :            
                  <li className="nav-item unloged">
                   <a  className= 'nav-link' href="#" data-toggle="modal" data-target="#loginModel" >Log In</a>
                  </li>
                }

                {this.props.loged? <li  className="nav-item loged">
                             <a  className= 'nav-link message' href="#" onClick={this.showMessage} >Messages</a>
                            </li>
                 : null}
                
                <li className="nav-item navbar__item__btn">
                  <button type="button" className="btn getly___btn navbar__item__btn-create-oreder" onClick={this.gocreateorder} >Create Order</button>
                </li>
              
                {this.props.loged ? localStorage.getItem("User-Photo") !== "null"  ?  <li className="nav-item loged">
                              <a className= 'nav-link ' href="#"  onClick={this.showMenu} >
                              <img className='nav__profile__img' src={localStorage.getItem("User-Photo")} />
                             </a>
                             </li>
                             : 
                             <li className="nav-item loged">
                              <a className= 'nav-link ' href="#"  onClick={this.showMenu} >
                              <img className='nav__profile__img' src='https://image.flaticon.com/icons/svg/265/265674.svg' />
                             </a>
                             </li>
                 : null}
               
                
              </ul>
             
            </div>
            <MenueSetting/>
            <Message_notification/>
          </nav>
          
        );
    }
}

const mapStateToProps = state =>(
  {
      loged: state.loged 
  }
)

export default withRouter(connect(mapStateToProps)(NAVBER));
