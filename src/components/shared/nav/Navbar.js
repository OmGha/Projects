import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from "jquery";
import '../nav/Navbar.css';
import shoppingbag from '../../../Assets/img/shopping-bag.svg';
import travlerplane from '../../../Assets/img/black-plane.svg';




class NAVBER extends Component {


  componentWillMount(){
    console.log(localStorage.getItem("userloged"));
    
    if(localStorage.getItem("userloged") == true){
        console.log(localStorage.getItem("userloged"));
        $('.loged').hide();
        $('.login').show();
    }
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

                <li className="nav-item loged">
                 <a className="nav-link " href="#"  data-toggle="modal" data-target="#SignupModel" >Sign Up</a>
                </li>
                <li className="nav-item loged">
                  <a className="nav-link " href="#" data-toggle="modal" data-target="#loginModel" >Log In</a>
                </li>

                  <li className="nav-item login">
               
                  <a className="nav-link " href="#" >Messages</a>
                 
                </li>
                <li className="nav-item navbar__item__btn">
                  <button type="button" className="btn getly___btn navbar__item__btn-create-oreder">Create Order</button>
                </li>
              

                <li className="nav-item login">
                  <a className="nav-link" href="#"  >
                    <img className='nav__profile__img' src='https://randomuser.me/api/portraits/men/11.jpg' />
                  </a>
                </li>
                
              </ul>
             
            </div>
          </nav>
          
        );
    }
}

export default NAVBER;
