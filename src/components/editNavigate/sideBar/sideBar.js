import React, { Component } from 'react';
import '../sideBar/sideBar.css';

class SideBar extends Component {
    render(){
        return(
            <div className='col-md-3'>
                    <div className='Profile__Side__Nav' >
                        <div><a className='Profile__element active'data-toggle="tab" href="#Edit__Profile" >Edit Profile</a></div>
                        <div><a className='Profile__element' data-toggle="tab" href="#Photos" >Photos</a></div>
                        <div><a className='Profile__element' data-toggle="tab" href="#Payment" >Payment & PayOut</a></div>
                    </div>
                    <div  >
                        <div className="tab-pane fade show active" id="Edit__Profile"  >.AAAAAAAA..</div>
                        <div className="tab-pane fade" id="Photos" >..BBBBB.</div>
                        <div className="tab-pane fade" id="Payment">..CCCCCCCC.</div>
                    </div>
 
                    
                   
                    <div className='btn__Div'><a className='btn btn-block space-top-4' href='#'>View Profile</a></div>
                </div>
                
        )
    }
}

export default SideBar; 