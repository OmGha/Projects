import React, { Component } from 'react';
import NAVBER from '../../shared/nav/Navbar';
import Footer from '../../shared/footer/Footer';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

import AutoComplete from 'material-ui/AutoComplete';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, red300, white } from 'material-ui/styles/colors';
import '../AddTrip/AddTrip.css';
import Trip_Image from '../../../Assets/img/plane4.svg';
import { type } from 'os';

const muiTheme = getMuiTheme ({
    datePicker: {
        textColor: white,
        pickerHeaderColor: '#008489',

    },
  });
  
  var predictionss=[];

class AddTrip extends Component {

    
    constructor(props) {
        super(props);
    
        this.state = {
            err: '',
            dataSource: [],
            TravilingFrom: "",
            TravilingTo:"",
            TravilDate: null
        };
        this.addingTrip = this.addingTrip.bind(this);

      }

      handleChangeTravildate = (event, date) => {
        this.setState({
            TravilDate: date,
        });
        console.log(this.state.TravilDate)

      };

      handleUpdateInput = (value) => {

       
        var self = this;
        $.post( "https://getlynow.herokuapp.com/scrap/Search_cities",
                        
            { "text":value}

                 )
            .done(function( data ) {

                console.log(JSON.parse(data))

                data = JSON.parse(data);
                predictionss=[];
                data.predictions.forEach(element => {
                    
           //        console.log(element);

                   predictionss.push(element.description);
                              
                });

                self.setState({dataSource:predictionss})
                console.log(predictionss);
               
             
            });
                      
              console.log('===============');
              console.log(self.state.dataSource);
                   
      };
  
      cityOfTravilingFrom=(value)=>{
        this.setState({
            TravilingFrom : value,
        }
        )
        console.log(this.state.TravilingFrom );
       }

       cityOfTravilingTo=(value)=>{
        this.setState({
            TravilingTo: value,
        }
        )
        console.log(this.state.TravilingTo);
       }

       addingTrip(event){
           const travilfrom =  this.state.TravilingFrom;
           // Get Token
         const    Travilto =  this.state.TravilingTo;
           const travilDate =   moment(this.state.travilDate).format('ll');

      const userToken=  localStorage.getItem("usertoken");

          console.log(travilfrom,Travilto,travilDate);

         // if(this.state.cityOfTravilingFrom !== '' && this.cityOfTravilingTo !== '' && travilDate !== null ){
 
            $.post("https://getlynow.herokuapp.com/auth/Createtrip",
            {
             

            
                "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6NTQsIm5hbWUiOiJBaG1lZCIsImlhdCI6MTUyMjg4NjM5Nn0.zDPaiky5g85c8HaaxaYRrf7XuLUdDFgbJ212p-SLxz4",
                "Fly_num":"58073572",
                "Current_city":travilfrom,
                "Destination_city":Travilto,
                "Date":travilDate,
                "Time":"02:55",
                "Description":"dfdgfdgfdgfdgf",
                "Waight":"2"
            }
        )
       .done(function( data ) {

           console.log(data.success ,"data add trip :"+  data , 'token : '+ userToken ,'travil from : '+travilfrom,'travil to : '+Travilto);

        
             });

         // }

          this.props.history.push('/AddTrip_Info');

       }
      
    render() {
        return (
           

            <div>
                <NAVBER/>
                 <div className='Addtrip__Cont'>
                     <div className='Addtrip__Cont__Icon'><img className="_plane " src={Trip_Image}/> </div>
                     <div className='Addtrip__Cont__tex'>
                         <h1><span className='Addtrip__Cont__tex1'>Add new trip</span></h1>
                         <span className='Addtrip__Cont__tex2'>With a trip added, you can make multiple offers and make more money.</span>
                         </div>
                         <div className='Addtrip__Cont__Form '>
                             <form>
                             <div className='form-group' >
                                    

                                    <MuiThemeProvider muiTheme={muiTheme}>
                                         <AutoComplete
                                           hintText="Traviling From (select form options)"
                                           className='create-order__city__input'
                                            dataSource={this.state.dataSource}
                                            onUpdateInput={this.handleUpdateInput}
                                            filter={AutoComplete.caseInsensitiveFilter}
                                            fullWidth={true}
                                            openOnFocus={false}
                                            disableFocusRipple={false}
                                            onNewRequest={this.cityOfTravilingFrom}
                                                       />
                                           </MuiThemeProvider>
                                    </div>
                                    
                                    <div className='form-group' >
                                    <MuiThemeProvider muiTheme={muiTheme}>
                                         <AutoComplete
                                           hintText="Traviling To (select form options)"
                                           className='create-order__city__input'
                                            dataSource={this.state.dataSource}
                                            onUpdateInput={this.handleUpdateInput}
                                            filter={AutoComplete.caseInsensitiveFilter}
                                            fullWidth={true}
                                            openOnFocus={false}
                                            disableFocusRipple={false}
                                            onNewRequest={this.cityOfTravilingTo}
                                                       />
                                           </MuiThemeProvider>
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
                                
                                                                
                                <button type='button' className='Add__btn' onClick={this.addingTrip}>Add</button>

                             </form>
                         </div>
                 </div>
                 <Footer/>
            </div>
        );
    }
}

export default AddTrip;
