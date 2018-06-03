import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import { withRouter } from 'react-router-dom';
import '../editNavigate/editNavigate.css';


class editProfile extends Component {
    render() {
        return (
            <div>
              
                <div className='container'>
                    <div className='row whole__Container'>
                        <div className='col-md-3'>
                            <div className='Profile__Side__Nav'>
                                <div><a className='Profile__element' href='#'>Edit Profile</a></div>
                                <div><a className='Profile__element' href='#'>Photos</a></div>
                                <div><a className='Profile__element' href='#'>Payment & PayOut</a></div>
                            </div>
                            <div className='btn__Div'><a className='btn btn-block space-top-4' href='#'>View Profile</a></div>
                        </div>
                        <div className='col-md-9'>
                        <form className='editProfile__Form'>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label htmlFor="fName4">First Name</label>
                                <input type="fName" className="form-control" id="fName4" placeholder="Jane"/>
                                </div>
                                <div className="form-group col-md-6">
                                <label htmlFor="lName4">Last Name</label>
                                <input type="text" className="form-control" id="lName4" placeholder="Doe"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail4">E-Mail</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder="name@example.com"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress2">Phone Number</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="(+20)-000-000-0000"/>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity"/>
                                </div>
                             
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default editProfile;  