import React, { Component } from 'react';
import UploadProfilePicComponent from './UploadProfilePic/UploadProfilePicComponent';
import NAVBER from '../../nav/Navbar';
import Footer from '../../footer/Footer';

class UploadProfilePic extends Component {
    render() {
        return (
            <div>
                <NAVBER />
                <UploadProfilePicComponent />
                <Footer />
            </div>
        );
    }
}

export default UploadProfilePic;
