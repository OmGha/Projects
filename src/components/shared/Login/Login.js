import React, { Component } from 'react';
import $ from "jquery";
import './Login.css';

var firebase = require('firebase');

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC2GrlLWJ3JnES4YrzOkp4zmaaW_-IWZR0",
    authDomain: "getly-app.firebaseapp.com",
    databaseURL: "https://getly-app.firebaseio.com",
    projectId: "getly-app",
    storageBucket: "getly-app.appspot.com",
    messagingSenderId: "931707583889"
  };
  firebase.initializeApp(config);


class Login extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            err: '',
        }

        this.onlogin = this.onlogin.bind(this);
      
    }

    
    onlogin(event){
        
      
        //get value of email and password
        const email = this.refs.lognInputEmail1.value;
        const passowrd = this.refs.loginInputPassword1.value;

       console.log(email, passowrd);

        // connect with firebase
        const auth = firebase.auth();

        const promise =  auth.signInWithEmailAndPassword(email,passowrd);


       
        // handle the login error
        promise.catch(e => {

            console.log('catch');
            
            
            var err = e.message;
            console.log(err);

            this.setState({err: e.message});

            console.log(this.state.err);

            if(this.state.err === '' && email !== '' && passowrd !== ''){
          

                localStorage.setItem("userloged", true);
    
            
               
              
                $('#closemodel').click();
      
            }
            

        });

        promise.then( ()=> {
           
            this.setState({err: ''});
            console.log(this.state.err);

            
            if(this.state.err === '' && email !== '' && passowrd !== ''){
          

                localStorage.setItem("userloged", true);
    
            
              
                $('#closemodel').click();
      
            }

        })
    
      
        
     
        



    }

  
    render() {
        return (
            <div>

                <div className="modal fade" id="loginModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
                     ref={modal => this.modal = modal} >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Log In</h5>
                        <button type="button" className="close" id='closemodel' data-dismiss="modal" aria-label="Close">
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
                                <div className="row">
                                    <span className='login__massage' >{this.state.err}</span>
                                </div>

                                <div className='row' >
                                                                
                                    <form className='login__form' >
                                        <div className="form-group">
                                            <input type="email" className="form-control login__inputs" id="lognInputEmail1" ref='lognInputEmail1' aria-describedby="emailHelp" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control login__inputs" id="loginInputPassword1" ref='loginInputPassword1' placeholder="Password" />
                                        </div>
                                        <button type="button" className="btn getly___btn login__form__btn" onClick={this.onlogin} >log In</button>
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
