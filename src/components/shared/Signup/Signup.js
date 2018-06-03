import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from "jquery";
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

import './Signup.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, red300, white } from 'material-ui/styles/colors';

var firebase = require('firebase');





const muiTheme = getMuiTheme ({
    datePicker: {
        textColor: white,
        pickerHeaderColor: '#008489',

    },
  });
  


class Signup extends Component {

  
    constructor(props) {
        super(props);
    
        this.state = {
            BirthdayDate: null,
            err: '',
        };

        this.signUp = this.signUp.bind(this);
      }


      funSING = () =>{
        this.props.dispatch({type: "LOGED"});
        console.log( this.props.loged);
     }

      signUp(){

        var FirstName = this.refs.SignupInputFirstname.value;
        var lastName = this.refs.SignupInputLastname.value;
        var email = this.refs.SignupInputEmail1.value;
        var password = this.refs.SignupInputPassword1.value;
        var Birthday =  moment(this.state.BirthdayDate).format('ll');   // Mar 21, 2018
      
  
        console.log(FirstName , lastName , email , password ,Birthday);
        var thisself  = this;




        // connect with firebase
        const auth = firebase.auth();

        //create user
        var promise = auth.createUserWithEmailAndPassword(email,password);
        promise
        .then(user => {
            var err = 'welcome'+ user.email;
            firebase.database().ref('user/'+user.uid).set({
                FirstName: FirstName,
                lastName: lastName,
                email: email,
                password: password,
                Birthday: Birthday,
            });

            console.log(user);

            this.setState({err : ''})

            if(this.state.err === '' ){

                    $.post( "https://getlynow.herokuapp.com/auth/singup",
                            
                    {
                        "First_Name": FirstName,
                        "Email": email,
                        "Last_Name": lastName,
                        "Password": password,
                        "Phone_number":" ",
                        "Reat": " ",
                        "City":" ",
                        "Birthday": Birthday,
                        "Personal_Info":" ",
                        "Gender":" "  
                    }
                
                )
            .done(function( data ) {

                console.log("data sign in :"+ data.success , data.auth , data.user);

                $('#firefunSING').click();
                $('#closeSingupModel').click();

                 this.props.history.push('/signup');
                 window.scrollTo(0, 0);
                        
            });
                  
         }
    
        });
        

        console.log(this.state.err);
        
        
      }


    
      handleChangeBirthday = (event, date) => {
        this.setState({
            BirthdayDate: date,
        });
        console.log( this.state.BirthdayDate);
        
      };
    

    render() {
        return (
            <div>
                <button id="firefunSING" onClick={this.funSING} >hello</button>

                    <div className="modal fade" id="SignupModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Sign Up</h5>
                            <button type="button" className="close" id='closeSingupModel' data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="container">
                                   {/*  <div className="row">
                                        <button type="button" className="btn getly___btn Signup__facebook">Continue with Facebook</button>
                                    </div> */}

                                    <div className="row">
                                        <span className='Signup__text-or' > Sign Up with Email</span>
                                    </div>
                                    <div className="row">
                                        <span className='login__massage' >{this.state.err}</span>
                                    </div>

                                    <div className='row' >
                                                                    
                                        <form className='Signup__form' >
                                        <div className="form-group">
                                                <input type="text" className="form-control Signup__inputs" id="SignupInputFirstname" ref='SignupInputFirstname' aria-describedby="firstnameHelp" placeholder="First name" />
                                            </div>     
                                         <div className="form-group">
                                                <input type="text" className="form-control Signup__inputs" id="SignupInputLastname" ref='SignupInputLastname' aria-describedby="LastnameHelp" placeholder="Last name" />
                                            </div>     
                                            <div className="form-group">
                                                <input type="email" className="form-control Signup__inputs" id="SignupInputEmail1" ref='SignupInputEmail1' aria-describedby="emailHelp" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control Signup__inputs" id="SignupInputPassword1" ref='SignupInputPassword1' placeholder="Password" />
                                            </div>


                                             <div className="form-group">
                                                <MuiThemeProvider muiTheme={muiTheme}>
                                                    <DatePicker  className='signup_DatePicker'
                                                        hintText="Birthday"
                                                        value={this.state.BirthdayDate}
                                                        onChange={this.handleChangeBirthday}
                                                    />
                                                </MuiThemeProvider>
                                             </div>
                                         
                                            <button type='button' className="btn getly___btn Signup__form__btn" onClick={this.signUp} >Sign Up</button>
                                        </form>

                                    </div>
                                    <div className="row">
                                        <span className='Signup__text-Terms' >By using Getly, I agree to Getly’s <a href="#" >Terms of Service</a>  and <a href="#">Privacy Policy</a>.</span>
                                    </div>
                                

                                    <div className='row'>
                                        <span className='Signup__register-account' >Already have an Getly account? <a href='#' > Log in</a></span>
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


export default withRouter(connect(mapStateToProps) (Signup));
