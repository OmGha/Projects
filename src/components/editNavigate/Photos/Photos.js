import React, { Component } from 'react';
import sideBar from '../sideBar/sideBar';
import './Photos.css';
import Profile from '../../../Assets/img/user.svg';

class Photos extends Component {
    render(){
        return(
            <div className='col-md-9 Display__Class'>
                <div className='editProfile__Form'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='Profile__img' src={Profile}/>
                        </div>
                        <div className='col-md-8'>
                            <label>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ultricies nibh, sagittis convallis ligula. Sed id sem luctus, tempor nisi efficitur, faucibus ante. Nunc quis lacinia quam. Praesent sit amet lectus ligula. Nulla facilisi. Sed quis leo massa. Cras ac orci quis massa congue condimentum vel ut libero. Praesent at ante quam. Integer suscipit diam ut accumsan rutrum. Duis consequat ligula a aliquam egestas. Maecenas euismod ante nec sem pulvinar pulvinar. Duis volutpat laoreet leo. Duis imperdiet justo eget dolor imperdiet, ac dignissim lorem vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </label>
                            <div className='btn__Div'><a className='btn btn-block space-top-4' href='#'>Upload Image From Your Device</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photos;  