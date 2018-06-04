import React, { Component } from 'react';
import $ from 'jquery'; 
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

  var shopperid;
  var itemPrice;
  var Service_fee ;
  var Pick_up_location = "";
  var Fly_number="58232";
  var Category_number="";


class TravelerOffer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            TravelDate: null,
            ordersData: "",
            
           
        };

       
      }

     handleChangeTravelDate = (event, date) => {
        this.setState({
            TravelDate: date,
           
        });
        console.log(this.state.TravelDate);
        
      };
    handlerTravelerfee= ()=>{
    }

    Coustomtax= ()=>{
    }

    makeOfferHandler= ()=>{
        var traverlerFee = $('#traverlerFee').val();
        var Coustomtax = $('#Coustomtax').val();
        var TravelDate = this.state.TravelDate;
        const usertoken =  localStorage.getItem("usertoken");
        
        $.post("https://getlynow.herokuapp.com/auth/Create_Deal",
            {
  
                "token": usertoken,
                "Price_of_object": this.state.ordersData.price_of_item,
                "Price_of_ship":this.state.ordersData.price_of_item*0.15,
                "Service_feare":this.state.ordersData.price_of_item*0.2,
                "Tax":Coustomtax,
                "Delevery_date": TravelDate,
                "Pick_up_location":Pick_up_location,
                "Fly_number":Fly_number,
                "Item_number": this.state.ordersData.Item_num,
                "Category_number":Category_number,
              }
        
            )
        .done(function( data ) {

            console.log( data);
            console.log("data sign in :"+ data.success);
        });

    }

    componentWillMount(){
        console.log('componentDidMount');
        
        const usertoken =  localStorage.getItem("usertoken");
        const orderID =  this.props.orderID;
        console.log(`https://getlynow.herokuapp.com/auth/getitembyid`);

        $.post( "https://getlynow.herokuapp.com/auth/getitembyid", {
            "token":usertoken,
            "id":orderID
        })
        .done(( data ) => {
            console.log(data[0]);
            this.setState({ordersData:data[0]})

            console.log(this.state.ordersData);
        }
    );

        
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
                                        <span> {this.state.ordersData.Getly_to}</span>
                                    </div>
                                    <div className='oreder__details__tfb'>
                                        <div>Deliver from </div>
                                        <span>  {this.state.ordersData.Getly_from}</span>
                                    </div>
                                    <div className='oreder__details__tfb'>
                                        <div>Deliver before </div>
                                        <span>  {this.state.ordersData.Getly_date}</span>
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
                                 id="traverlerFee" ref='traverlerFee' aria-label="Amount (to the nearest dollar)"  />
                             </div>
                             <span>Using recommended delivery fee of $ {Math.round(this.state.ordersData.price_of_item*0.15).toString()} increases your changes of having your offer accepted.However you can propose an alternative bid of your chioce.
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
                                 id="Coustomtax" ref='Coustomtax' aria-label="Amount (to the nearest dollar)"  />
                             </div>
                             <span>if there Sales tax
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
                                  <button type='button' className="btn getly___btn Signup__form__btn" onClick={this.makeOfferHandler} >Make delivery offer</button>
                            </div>
                        </div>




                     </div>
                    </div>

                    <div className='col-md-4 ' >
                    <div className=' treveler-offer__col' >

                       <div className='row' >
                            <div className='col-md-8' >
                               <span>{this.state.ordersData.Item_name}</span>
                            </div>
                            <div className='col-md-4' >
                               <div>
                                 <img className='Completed-Order__order__img' src={this.state.ordersData.Item_photo} />
                               </div>
                            </div>
                        </div> 
                        <hr />

                        <div className='row' >
                            <div className='col-md-8' >
                                <span>Item Price</span>
                            </div>
                            <div className='col-md-4' >
                                <span>$<span>{this.state.ordersData.price_of_item}</span></span>
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-md-8' >
                                <span>Sale tax</span>
                            </div>
                            <div className='col-md-4' >
                                <span>$<span>0</span></span>
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
                                <span>$<span>{Math.round(this.state.ordersData.price_of_item*0.15).toString()}</span></span>
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
