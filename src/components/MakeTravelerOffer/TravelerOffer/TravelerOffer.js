import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, red300, white } from 'material-ui/styles/colors';

import './TravelerOffer.css';



const muiTheme = getMuiTheme ({
    datePicker: {
        textColor: white,
        pickerHeaderColor: '#008489',

    },
  });



class TravelerOffer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            TravelDate: null,
           
        };

       
      }

     handleChangeTravelDate = (event, date) => {
        this.setState({
            TravelDate: date,
        });
      };

    handlerTravelerfee= ()=>{
    }

    Coustomtax= ()=>{
    }

    render() {
        return (
            <div className='treveler-offer' >

           
            <div className='container__treveler-offer' >
                <div className="container-fluid">
                  <div className='row' >
                    <div className='col-md-8 ' >
                    <div className=' treveler-offer__col' >

                        <div className='row' >
                            <div className='col-md-12' >
                               <h1 className='treveler-offer__title__h1' >Make delivery offer</h1>
                            </div>
                        </div> 
                        <hr />
                        <div className='row' >
                            <div className='col-md-12' >
                               <h1 className='treveler-offer__title__h1' >Trip details</h1>
                            </div>
                        </div> 
                        <div className='row' >
                            <div className='col-md-12' >
                                    <div className='trep__details' >
                                    <div className='oreder__details__tfb' >
                                        <div>Deliver to </div>
                                        <span> Cairo, EG</span>
                                    </div>
                                    <div className='oreder__details__tfb'>
                                        <div>Deliver from </div>
                                        <span> New York,US </span>
                                    </div>
                                    <div className='oreder__details__tfb'>
                                        <div>Deliver before </div>
                                        <span> March 20, 2018</span>
                                    </div>
                                  </div>
                            </div>
                        </div> 
                        <hr />
                        <div className='row'>
                            <div className='col-md-12' >
                                 <h1 className='treveler-offer__title__h1' >Offer details</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12' >
                            <label className='input-lable' htmlFor="item-price">Traveler fee</label>
                             <div className="input-group  create-oreder__inputs__price_container">
                                    
                                <div className="input-group-prepend">
                                    <span className="input-group-text input_doller__char">$</span>
                                </div>
                                <input type="number" onChange={this.handlerTravelerfee} className="form-control create-oreder__inputs__price"
                                 id="traverlerFee" ref='traverlerFee' aria-label="Amount (to the nearest dollar)" value='5' />
                             </div>
                             <span>Nulla cillum exercitation fugiat nulla. Reprehenderit tempor Lorem in laborum excepteur mollit veniam deserunt culpa 
                                    </span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12' >
                            <label className='input-lable' htmlFor="item-price">Coustom tax</label>
                             <div className="input-group  create-oreder__inputs__price_container">
                                    
                                <div className="input-group-prepend">
                                    <span className="input-group-text input_doller__char">$</span>
                                </div>
                                <input type="number" onChange={this.Coustomtax} className="form-control create-oreder__inputs__price"
                                 id="Coustomtax" ref='Coustomtax' aria-label="Amount (to the nearest dollar)" value='0' />
                             </div>
                             <span>Nulla cillum exercitation fugiat nulla. Reprehenderit tempor Lorem in laborum excepteur m culpa irure
                                    </span>
                            </div>
                        </div>
                        <div className='row' >

                            <div className='col-md-12'>

                                     <div className="form-group">
                                     <label className='input-lable' >Travel Date</label>
                                         <MuiThemeProvider muiTheme={muiTheme}>
                                         <DatePicker  className='signup_DatePicker'
                                          hintText="Travel Date"
                                          value={this.state.TravelDate}
                                          onChange={this.handleChangeTravelDate}
                                             />
                                         </MuiThemeProvider>
                                      </div>
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-md-12' >
                                <div className="form-group" >
                                    <label htmlFor="MessageShopper" className='input-lable'>MessageShopper</label>
                                    <textarea className="form-control create-oreder__textarea" id="MessageShopper" rows="3" placeholder='Write a friendly message to spopper' ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-12'>
                                  <button type='button' className="btn getly___btn Signup__form__btn"  >Make delivery offer</button>
                            </div>
                        </div>




                     </div>
                    </div>

                    <div className='col-md-4 ' >
                    <div className=' treveler-offer__col' >

                       <div className='row' >
                            <div className='col-md-8' >
                               <span>  Converse Classic Chucks Shoes</span>
                            </div>
                            <div className='col-md-4' >
                               <div>
                                 <img className='Completed-Order__order__img' src='https://images.nike.com/is/image/DotCom/PDP_HERO_ZOOM/M9697_410_A_PREM/converse-chuck-taylor-all-star-low-top-unisex-shoe.jpg' />
                               </div>
                            </div>
                        </div> 
                        <hr />

                        <div className='row' >
                            <div className='col-md-8' >
                                <span>Item Price</span>
                            </div>
                            <div className='col-md-4' >
                                <span>$<span>20</span></span>
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-md-8' >
                                <span>Sale tax</span>
                            </div>
                            <div className='col-md-4' >
                                <span>$<span>3</span></span>
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-md-8' >
                                <span>Coustom tax</span>
                            </div>
                            <div className='col-md-4' >
                                <span>$<span>0</span></span>
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-md-8' >
                                <span>Your delivery fee</span>
                            </div>
                            <div className='col-md-4' >
                                <span>$<span>5</span></span>
                            </div>
                        </div>
                        <hr />
                        <div className='row' >
                            <div className='col-md-8' >
                                <span>Total</span>
                            </div>
                            <div className='col-md-4' >
                                <span>$<span>28</span></span>
                            </div>
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

export default TravelerOffer;
