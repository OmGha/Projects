import React, { Component } from 'react';
import $ from 'jquery';
import Order from '../shared/Order/Order';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './serarchorders.css';
import orders from '../Orders/orders';


const muiTheme = getMuiTheme ({
    datePicker: {
        textColor: '#ffffff',
        pickerHeaderColor: '#008489',
       

    },
  });


  var predictionss=[];

class Serarchorders extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.state={
            dataSource: [],
            ordersData: [],
            formCity: '',
            toCity: '',

        };
     
    }

    formCITYfun = (value) =>{
        this.setState({
            formCity: value,
        });

        console.log(this.state.formCity);

    }

    toCITYfun = (value) =>{
        this.setState({
            toCity: value,
        });

        console.log(this.state.toCity);

    } 

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

    getOrders = async () =>{
        const usertoken =  localStorage.getItem("usertoken");
        const cityto =  this.props.match.params.to;
        const cityfrom =  this.props.match.params.from;
        console.log(`https://getlynow.herokuapp.com/auth/Getgetly?token=${usertoken}&from=${cityfrom}&to=${cityto}`);

        fetch(`https://getlynow.herokuapp.com/auth/Getgetly?token=${usertoken}&from=${cityfrom}&to=${cityto}`)
        .then(
            (response)  => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            // Examine the text in the response
            response.json().then((data) => {
                console.log(data);
                this.setState({ordersData:data})

                console.log(this.state.ordersData);

            });
            }
        )
        .catch((err) => {
            console.log('Fetch Error :-S', err);
        });


       
        
 
        
    }

    componentWillMount(){
        console.log("************************************");
        
        console.log(this.props.match.params.from);
        console.log(this.props.match.params.to);
        this.getOrders();

    }

    findOrder = async () =>{
        const usertoken =  localStorage.getItem("usertoken");
        const cityto =  this.state.toCity;
        const cityfrom = this.state.formCity;
        console.log(`https://getlynow.herokuapp.com/auth/Getgetly?token=${usertoken}&from=${cityfrom}&to=${cityto}`);

        fetch(`https://getlynow.herokuapp.com/auth/Getgetly?token=${usertoken}&from=${cityfrom}&to=${cityto}`)
        .then(
            (response)  => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            // Examine the text in the response
            response.json().then((data) => {
                console.log(data);
                this.setState({ordersData:data})

                console.log(this.state.ordersData);

            });
            }
        )
        .catch((err) => {
            console.log('Fetch Error :-S', err);
        });


       
    }


    render() {

        return (
            <div>
                <div>
                    <div className="container" >

                        <div className=" search-form">
                        <div className="col-md-9" >
                            <div className="row" >
                            <div className="  mb-3 col-md-5">
                                 <div className='form-group' >
                                    <MuiThemeProvider muiTheme={muiTheme}>
                                         <AutoComplete
                                           hintText="From city (select form options)"
                                           className='create-order__city__input'
                                            dataSource={this.state.dataSource}
                                            onUpdateInput={this.handleUpdateInput}
                                            filter={AutoComplete.caseInsensitiveFilter}
                                            fullWidth={true}
                                            openOnFocus={false}
                                            disableFocusRipple={false}
                                            onNewRequest={this.formCITYfun}
                                                       />
                                           </MuiThemeProvider>
                                    </div>
                            </div>
                                <div className='col-md-2' >
                                
                                 </div>
                                 <div className="  mb-3 col-md-5">
                                 <div className='form-group' >
                                    <MuiThemeProvider muiTheme={muiTheme}>
                                         <AutoComplete
                                           hintText="To city (select form options)"
                                           className='create-order__city__input'
                                            dataSource={this.state.dataSource}
                                            onUpdateInput={this.handleUpdateInput}
                                            filter={AutoComplete.caseInsensitiveFilter}
                                            fullWidth={true}
                                            openOnFocus={false}
                                            disableFocusRipple={false}
                                            onNewRequest={this.toCITYfun}
                                                       />
                                           </MuiThemeProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" >
                            <button type="button" className="btn getly___btn search__form__btn" onClick={this.findOrder}>Find order</button>
                        </div>
                    </div>

                    </div>

                </div>

                <div className="order-box">
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-8" >

                                             {
                                                this.state.ordersData.length > 0
                                                    ? this.state.ordersData.map(order => <Order key={order.Item_num} orderDate={order} />)
                                                    : 'no data!'
                                            }
                    
                                                                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(Serarchorders);
