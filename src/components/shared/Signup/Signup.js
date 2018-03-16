import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';

import './Signup.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, red300, white } from 'material-ui/styles/colors';




const muiTheme = getMuiTheme ({
    datePicker: {
        textColor: white,

    },
  });
  



class Signup extends Component {

  
    constructor(props) {
        super(props);
    
        this.state = {
          controlledDate: null,
        };
      }
    
      handleChange = (event, date) => {
        this.setState({
          controlledDate: date,
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
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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

                                    <div className='row' >
                                                                    
                                        <form className='Signup__form' >
                                        <div className="form-group">
                                                <input type="text" className="form-control Signup__inputs" id="SignupInputFirstname" aria-describedby="firstnameHelp" placeholder="First name" />
                                            </div>     
                                        <div className="form-group">
                                                <input type="text" className="form-control Signup__inputs" id="SignupInputLastname" aria-describedby="LastnameHelp" placeholder="Last name" />
                                            </div>     
                                            <div className="form-group">
                                                <input type="email" className="form-control Signup__inputs" id="SignupInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control Signup__inputs" id="SignupInputPassword1" placeholder="Password" />
                                            </div>


                                             <div className="form-group">
                                             <MuiThemeProvider muiTheme={muiTheme}>
                                                <DatePicker className='signup_DatePicker'
                                                    hintText="Birthday"
                                                    value={this.state.controlledDate}
                                                    onChange={this.handleChange}
                                                />
                                            </MuiThemeProvider>
                                           
                                             </div>
                                         



                                            <button type="submit" className="btn getly___btn Signup__form__btn">Sign Up</button>
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

export default Signup;
