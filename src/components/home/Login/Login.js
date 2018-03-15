import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  

    render() {
        return (
            <div>

<div className="modal fade" id="loginModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Log In</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
            <div className="container">
                <div className="row">
                    <button type="button" className="btn getly___btn login__facebook">log in With Facebook</button>
                </div>

                <div className="row">
                    <span className='login__text-or' >Or log in with Email</span>
                </div>

                <div className='row' >
                                                
                     <form className='login__form' >
                        <div className="form-group">
                            <input type="email" className="form-control login__inputs" id="lognInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control login__inputs" id="loginInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn getly___btn login__form__btn">log In</button>
                    </form>

                </div>
                <div className="row">
                    <span className='login__text-Terms' >By using Getly, I agree to Getly’s Terms of Service and Privacy Policy.</span>
                </div>
                <div className='row'>
                    <a className='login__forgot-passowrd' href="#" >Forgot your password?</a>
                </div>

                 <div className='row'>
                    <span className='Login__register-account' >Don’t have an account? <a href='' >Register here</a></span>
                </div>

            </div>
            
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Login;
