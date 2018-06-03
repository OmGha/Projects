import React, { Component } from 'react';
import $ from "jquery";
import { connect } from 'react-redux';
import { SyncLoader } from 'react-spinners';
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
            loading: false,

        }

        this.onlogin = this.onlogin.bind(this);
    }


    componentWillMount(){
        console.log("componentWillMount");
        console.log( this.props.loged);
    }


    fun = () =>{
        this.props.dispatch({type: "LOGED"});
        console.log( this.props.loged);
    }

    onlogin =(event) =>{
        
        $('.sweet-loading').show(200);
        this.setState({loading:true});

      
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

            $('.sweet-loading').hide(200);
            this.setState({loading:false});

        });

        promise.then( ()=> {

            $('.sweet-loading').show(200);
            this.setState({loading:true});
           
            this.setState({err: ''});
            console.log(this.state.err);
            
          if(this.state.err === '' && email !== '' && passowrd !== ''){
          
                $.post("https://getlynow.herokuapp.com/auth/login",
                     {
                      "Email": email,
                      "Password": passowrd 
                     }
                 )
                .done(( data ) => {

                    console.log("data sign in :"+ data.success , data.resulit.token  );
                    console.log( data.resulit.data[0]   );

                    // Store
                   localStorage.setItem("usertoken", data.resulit.token );
                   localStorage.setItem("User-First_name", data.resulit.data[0].First_name );
                   localStorage.setItem("User-Last_name", data.resulit.data[0].Last_name );
                   localStorage.setItem("User-Photo", data.resulit.data[0].Photo );
         //          localStorage.setItem("User-Photo", "https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg" );

                    var x = localStorage.getItem("User-Photo");

                    console.log(x);
                                  

                    $('#firefunction').click();
                
                    $('#closemodel').click();
                    $('#lognInputEmail1').val('');
                    $('#loginInputPassword1').val('');

                    $('.sweet-loading').hide(200);
                    this.setState({loading:false});

                });

                      
      
            }

        })
        
    }

    
  
    render() {
        return (
            <div>
                
         
                <button id="firefunction" onClick={this.fun} >hello</button>

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

            <div className='sweet-loading'>
                <SyncLoader
                color={'#008489'} 
                loading={this.state.loading} 
                />
            </div>

                    <div className="modal-body">

      
                            <div className="container">
                                {/* <div className="row">
                                    <button type="button" className="btn getly___btn login__facebook">log in With Facebook</button>
                                </div> */}

                                <div className="row">
                                    <span className='login__text-or' >log in with Email</span>
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


const mapStateToProps = state =>(
    {
        loged: state.loged 
    }
)

export default connect(mapStateToProps)(Login) ;
