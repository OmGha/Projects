import React, { Component } from 'react';
import sideBar from '../sideBar/sideBar';

import './editProfile.css';

class editProfile extends Component {
    render() {
        return (                    
            <div className='col-md-9 Display__Class'>
                <form className='editProfile__Form'>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="fName4">First Name</label>
                        <input type="fName" className="form-control" id="fName4" placeholder="Jane"/>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="lName4">Last Name</label>
                        <input type="text" className="form-control" id="lName4" placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputEmail4">E-Mail</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Phone Number</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="(+20)-000-000-0000"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                        <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default editProfile;  