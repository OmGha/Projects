import React, { Component } from 'react';
import '../nav/Navbar.css';
import shoppingbag from '../../../Assets/img/shopping-bag.svg';
import travlerplane from '../../../Assets/img/black-plane.svg';



class NAVBER extends Component {
    render() {
        return (
        <nav className="navbar navbar1 navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Getly</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
               
                
              </ul>

              <ul className="navbar-nav  mt-2 mt-lg-0">

               <li className="nav-item">
                 <a className="nav-link" href="#"><img className="navbar__item__img" src={shoppingbag} /> Make Order</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><img className="navbar__item__img" src={travlerplane} /> Make Money</a>
                </li>

                <li className="nav-item ">
                 <a className="nav-link" href="#">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Log In</a>
                </li>
                <li className="nav-item navbar__item__btn">
                  <button type="button" className="btn getly___btn navbar__item__btn-create-oreder">Create Order</button>
                </li>
                
              </ul>
             
            </div>
          </nav>
          
        );
    }
}

export default NAVBER;
