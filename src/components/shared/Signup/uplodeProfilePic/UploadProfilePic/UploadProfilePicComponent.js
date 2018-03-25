import React, { Component } from 'react';
import './UploadProfilePicComponent.css';
import user from '../../../../../Assets/img/user.svg';
import styled from 'styled-components';

class UploadProfilePicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
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
    
        reader.readAsDataURL(file)
      }
  
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        let $buttonFinish=null;
        if (imagePreviewUrl) {
        $imagePreview = (<img className="profilImg" src={imagePreviewUrl} />);
        $buttonFinish =(<button className=" btn__finish btn btn-outline-info">Finish</button> );
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
                            <input id="userImage" type="file" accept="image/gif, image/jpeg, image/png" onChange={(e)=>this._handleImageChange(e)} />
                            <span>Select image to uploade</span>
                        </label>
                        <div className="buttonFinish">
                        {$buttonFinish}

                        </div>
                    </div>
                    <div className='upload__img_blocl__skip'>
                        <a href="#">Skip this step</a>
                    </div>
                 </div>

                    
               </div>
            </div>
        );
    }
}

export default UploadProfilePicComponent;
