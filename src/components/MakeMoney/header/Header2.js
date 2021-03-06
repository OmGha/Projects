import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header2.css';
import $ from 'jquery';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';




const muiTheme = getMuiTheme ({
    datePicker: {
        textColor: '#ffffff',
        pickerHeaderColor: '#008489',
       

    },
  });


  var predictionss=[];


class Header extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.state={
            dataSource: [],
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

    Serarchsowhandler =()=>{
        console.log(`/finditem/${this.state.formCity}/${this.state.toCity}`);
        this.props.history.push(`/finditem/${this.state.formCity}/${this.state.toCity}`);
        window.scrollTo(0, 0);
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

    


    render() {
       
        return (
    
            <div className="headerMM" >
               <div className="slideshowMM">
                    <div  className="slideshow-imageMM" ></div>
                    <div className="slideshow-imageMM" ></div>
                    <div className="slideshow-imageMM" ></div>
                    <div className="slideshow-imageMM" ></div> 
                </div>
                <div className="header__layerMM">
                    <div className="header__boxMM">
                        <div className="header__box__textMM" >
                            <h1 className="header__box__text__h1MM">
                                Earn Money while traveling 
                            </h1>
                            <h1 className="header__box__text__h1MM" id='scndTitle'>
                                Join Getly community and help shoppers across the WORLD
                            </h1>
                            
                        </div>

                        <div className='container search__City' > 
                         <form  className="header__box__search row">
                           

                            <div className="  mb-3 col-md-5">
                                 <div className='form-group' >
                                    <MuiThemeProvider muiTheme={muiTheme}>
                                         <AutoComplete
                                           hintText="from city (select form options)"
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
                            <div className=" mb-3 col-md-5">
                                     <div className='form-group' >
                                         <MuiThemeProvider muiTheme={muiTheme}>
                                              <AutoComplete
                                                hintText="to city (select form options)"
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
                            
                            <button type="button" className="btn getly___btn header__box__Shearch__btn col-md-2" onClick={this.Serarchsowhandler} >Search</button>

                        </form>

                        </div>
                    </div>
                </div>
               

              

            </div>
        );
    }
}



export default withRouter(Header);
