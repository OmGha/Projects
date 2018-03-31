import React, { Component } from 'react';
import '../sideBar/sideBar.css';

class SideBar extends Component {
    render(){
        return(
            <div className='col-md-3'>
                    <div className='Profile__Side__Nav'>
                        <div><a className='Profile__element' href='#'>Edit Profile</a></div>
                        <div><a className='Profile__element' href='#'>Photos</a></div>
                        <div><a className='Profile__element' href='#'>Payment & PayOut</a></div>
                    </div>
                    <div className='btn__Div'><a className='btn btn-block space-top-4' href='#'>View Profile</a></div>
                </div>
        )
    }
}

export default SideBar;  