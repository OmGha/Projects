import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from "jquery";
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

      signUp(){

        const FirstName = this.refs.SignupInputFirstname.value;
        const lastName = this.refs.SignupInputLastname.value;
        const email = this.refs.SignupInputEmail1.value;
        const password = this.refs.SignupInputPassword1.value;
        const Birthday =  moment(this.state.BirthdayDate).format('ll');   // Mar 21, 2018
      

        console.log(FirstName , lastName , email , password ,Birthday);

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

           
            
        });
        promise
        .catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({err : err})

            localStorage.setItem("userloged", false);
            
        });

        console.log(this.state.err);
        
/* 
        if(this.state.err === '' ){

            localStorage.setItem("userloged", true);
        
            $('#closeSingupModel').click();

            this.props.history.push('/signup');
            window.scrollTo(0, 0);



        }
 */

        
      }


    
      handleChangeBirthday = (event, date) => {
        this.setState({
            BirthdayDate: date,
        });
      };
    

    render() {
        return (
            <div>

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
                                    <div className="row">
                                        <button type="button" className="btn getly___btn Signup__facebook">Continue with Facebook</button>
                                    </div>

                                    <div className="row">
                                        <span className='Signup__text-or' >Or Sign Up with Email</span>
                                    </div>
                                    <div className="row">
                                        <span className='login__massage' ></span>
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

export default withRouter(Signup);
