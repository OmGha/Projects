import React, { Component } from 'react';
import NAVBER from '../shared/nav/Navbar';
import Footer from '../shared/footer/Footer';
import '../editProfile/editProfile.css';


class editProfile extends Component {
    render() {
        return (
            <div>
                <NAVBER/>
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
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="fName4">First Name</label>
                                <input type="fName" class="form-control" id="fName4" placeholder="Jane"/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="lName4">Last Name</label>
                                <input type="text" class="form-control" id="lName4" placeholder="Doe"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail4">E-Mail</label>
                                <input type="text" class="form-control" id="inputEmail4" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Phone Number</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="(+20)-000-000-0000"/>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity"/>
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                                <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default editProfile;