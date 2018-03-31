import React, { Component } from 'react';
import NAVBER from '../../shared/nav/Navbar';
import Footer from '../../shared/footer/Footer';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, red300, white } from 'material-ui/styles/colors';
import '../AddTrip/AddTrip.css';
import Trip_Image from '../../../Assets/img/plane4.svg';

const muiTheme = getMuiTheme ({
    datePicker: {
        textColor: white,
        pickerHeaderColor: '#008489',

    },
  });
  

class AddTrip extends Component {

    
    constructor(props) {
        super(props);
    
        this.state = {
            TravilDate: null,
            err: '',
        };

      }

      handleChangeTravildate = (event, date) => {
        this.setState({
            TravilDate: date,
        });
      };

    render() {
        return (
           

            <div>
                <NAVBER/>
                 <div className='Addtrip__Cont'>
                     <div className='Addtrip__Cont__Icon'><img class="_plane " src={Trip_Image}/> </div>
                     <div className='Addtrip__Cont__tex'>
                         <h1><span className='Addtrip__Cont__tex1'>Add new trip</span></h1>
                         <span className='Addtrip__Cont__tex2'>With a trip added, you can make multiple offers and make more money.</span>
                         </div>
                         <div className='Addtrip__Cont__Form '>
                             <form>
                                <div className='Addtrip__Cont__Form__Div row'>
                                    <span className='Addtrip__Cont__Form__Span col-4'>Traviling from</span>
                                    <input className='Addtrip__Cont__Form__Input col-8' placeholder='City'/>
                                </div>
                                <div className='Addtrip__Cont__Form__Div row'>
                                    <span className='Addtrip__Cont__Form__Span col-4'>Traviling to</span>
                                    <input className='Addtrip__Cont__Form__Input col-8' placeholder='City'/>
                                </div>

                                    <div className=" Date_Div row  ">
                                                <MuiThemeProvider muiTheme={muiTheme}>
                                                    <DatePicker  className='travil_DatePicker col-12'
                                                        hintText="Travil Date"
                                                        value={this.state.TravilDate}
                                                        onChange={this.handleChangeTravildate}
                                                    />
                                                </MuiThemeProvider>
                                             </div>
                                
                                                                
                                <button type='button' className='Add__btn'>Add</button>

                             </form>
                         </div>
                 </div>
                 <Footer/>
            </div>
        );
    }
}

export default AddTrip;
