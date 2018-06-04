import React, { Component } from 'react';
import $ from "jquery";
import './UploadProfilePicComponent.css';
import user from '../../../../../Assets/img/user.svg';
import styled from 'styled-components';
import firebase from 'firebase'
import Login from '../../../Login/Login';


class UploadProfilePicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            imgUrl: '',
    };
      }

      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }

        console.log('FIRED');
        const ref = firebase.storage().ref();
        const filex = document.querySelector('#imgprofilepic').files[0]
        const name = (+new Date()) + '-' + filex.name;
        const metadata = {
        contentType: filex.type
        };
        const task = ref.child(name).put(filex, metadata);
        task.then((snapshot) => {
        const url = snapshot.downloadURL;
        this.setState({imgUrl: url});
        console.log(this.state.imgUrl);
        localStorage.setItem("User-Photo",this.state.imgUrl);
        }).catch((error) => {
        console.error(error);
        });
    
        reader.readAsDataURL(file)
      }


      sendprofilepic =() =>{
          var usertoken = localStorage.getItem('usertoken');
          var Imagelink = this.state.imgUrl;
            console.log(usertoken , Imagelink);
        $.post("https://getlynow.herokuapp.com/auth/Updateuserphoto",
        {
                "token":usertoken,
                "photo":Imagelink,
         })
        .done(( data ) => {

            console.log("DONE :"+ data.success);
            this.props.history.push('/');
            window.scrollTo(0, 0);


       
        });
      }
  
      Skip=()=>{
        this.props.history.push('/');
        window.scrollTo(0, 0);
      }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        let $buttonFinish=null;
        if (imagePreviewUrl) {
        $imagePreview = (<img className="profilImg" src={imagePreviewUrl} />);
        $buttonFinish =(<button onClick={this.sendprofilepic} className=" btn__finish btn btn-outline-info">Finish</button> );
        } else {
          $imagePreview=(<img className="profilImg__Icon" src={user} />);
        }
    
        return (
            <div className='container' >
               <div className='row' >
                    <div className='upload__img_blocl' >
                        <h2>Please upload your picture</h2>
                        <p>Updating you real photo increases you chances to receive an offer or get your offer accepted. It also helps to recognize each other at meeting.</p>
                        <div className="imagePreview">
                        {$imagePreview}
                       
                    </div>
                    
                    <div className="div__btn__uploade">
                        <label className=" btn__uploade btn btn-outline-info" onSubmit={(e)=>this._handleSubmit(e)}>
                            <input id="userImage" type="file" id='imgprofilepic' multiple accept="image/gif, image/jpeg, image/png" onChange={(e)=>this._handleImageChange(e)} />
                            <span>Select image to uploade</span>
                        </label>
                        <div className="buttonFinish">
                        {$buttonFinish}
                        </div>
                    </div>
                    <div className='upload__img_blocl__skip'>
                        <a href="#" onClick={this.Skip}>Skip this step</a>
                    </div>
                 </div>

                    
               </div>
            </div>
        );
    }
}

export default UploadProfilePicComponent;
