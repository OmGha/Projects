import React, { Component } from 'react';
import $ from 'jquery';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';


import moment from 'moment';



import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, red300, white } from 'material-ui/styles/colors';

import './createOrderContainer.css';


const muiTheme = getMuiTheme ({
    datePicker: {
        textColor: white,
        pickerHeaderColor: '#008489',
       

    },
  });



  var predictionss=[];


class createOrderContainer extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            Quantity : 1,
            Deliverbefore: null,
            dataSource: [],
        };

        
      this.handlemines = this.handlemines.bind(this);
      this.handleplus = this.handleplus.bind(this);
      this.showAboutItemForm = this.showAboutItemForm.bind(this);
      this.hideAboutItemForm = this.hideAboutItemForm.bind(this);
    }



    // ------------------------------------------------------------


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

    


    // ------------------------------------------------------------


    tostep2 = () => {
        $('.create-order__step1').fadeOut(300); 
        $('.create-order__step2').fadeIn(300);
    }
    
    tostep3 = () => {
        $('.create-order__step2').fadeOut(300); 
        $('.create-order__step3').fadeIn(300);
    }


    handleDeliverbefore = (event, date) => {
        this.setState({
            Deliverbefore: date,
        });
      };


    getItemData =  (e) => {
        const linkItem = this.refs.Itemlink.value;
        console.log(linkItem.length);

        console.log('fetch');
        e.preventDefault();
     
        const ApiFetchItemData = 'https://getlynow.herokuapp.com/scrap/product';

        if(linkItem.length != 0 ){

                $.post( ApiFetchItemData,
                        
                            { "url":linkItem}

                    )
                .done(function( data ) {
                    console.log(  data);

                  
                    $('.create__order__link__offline-store').fadeOut(100);
                    $('.create__order__link__online-store').fadeIn(100);
                    $('.form-about-item').fadeIn(300);

                        console.log(data.details);
                        
                        var Description = data.details.slice(0, 4);
                  

                    $('#item-name').val( data.title);
                    $('#Description-item').val( Description);
                    $('#itemPrice').val( data.price);
                    console.log(data.url);
                    
                    $('#itemURL').val(data.url);
                     
                    
                });
            
        }
        else{
                console.log('please paste the link'); 
        }
        
    }


    hideAboutItemForm(e){
        e.preventDefault();

        $('.form-about-item').fadeOut(300);
        $('.create__order__link__online-store').fadeOut(100);
        $('.create__order__link__offline-store').fadeIn(100);
      


    }

    showAboutItemForm(e){
        e.preventDefault();
        $('.create__order__link__offline-store').fadeOut(100);
        $('.create__order__link__online-store').fadeIn(100);
        $('.form-about-item').fadeIn(300);
    }


     handlemines(){
            if(this.state.Quantity ===   1){}
            else{
                  this.setState(prevState => ({
                    Quantity:  this.state.Quantity-1,
                  }));

                 
            }
       }

    

       

       handleplus = () => {
                 this.setState({ Quantity: this.state.Quantity + 1 });
            }
    

          


    render() {
        return (
            <div> 
           <section className='createOrder__container'>
               <div className='container' >
                    <div className='row'>
                     <div className="how-to-use__title">
                            <h1 className="how-to-use__title__h1">Create your order in 3 esay steps</h1>
                        </div>
                    </div>
                    <div className='row createOrder__steps'>

                        <div className='col-md-4 createOrder__steps_col' >
                            <div className='createOrder__steps__step' >
                                <img className='createOrder__step__img'  src={require('../../../Assets/img/shopping-bag.svg')} />
                                <span className='createOrder__step__text  createOrder__step__text__active' >tell us about your item</span>
                            </div>
                        </div>
                        <div className='col-md-4 createOrder__steps_col' >
                            <div className='createOrder__steps__step' >
                                <img className='createOrder__step__img'  src={require('../../../Assets/img/shopping-bag.svg')} />
                                <span className='createOrder__step__text' >from where do you wanna get your item</span>
                            </div>
                        </div>
                        <div className='col-md-4 createOrder__steps_colx' >
                            <div className='createOrder__steps__step' >
                                <img className='createOrder__step__img'  src={require('../../../Assets/img/shopping-bag.svg')} />
                                <span className='createOrder__step__text' >Checkout & get it with getly </span>
                            </div>
                        </div>
            
                    </div>

                <div className='create-order__step1' >
                
                <div className='row' >
                             <h3 className='create__order__title__h3' >Tell us about your item</h3>  
                        
                      
                        <p>If your item from online store get the Link and paste below</p>
                    </div>

                    <div className='row' >
                        <div className='col-md-9 create-oreder__inputs_col' >
                          <div className="form-group">
                                <input type="text" className="form-control create-oreder__inputs" id="itemlink" ref='Itemlink'  placeholder="paste a link"/>
                            </div>
                        </div>
                        <div className='col-md-3'>
                             <button type="button" className="btn getly___btn btn-create-oreder" onClick={this.getItemData} >Create Order</button>
                        </div>
                    </div>
                    <div className='row'>
                        <a className='create__order__link__offline-store' onClick={this.showAboutItemForm} href='#'>If your item in offline store add details manually</a>
                    </div>


                  <div className='form-about-item' >


                      <div className='row'>
                            <span className='create__order__link__online-store' >
                            If your item from online store get the Link?<a href='#' onClick={this.hideAboutItemForm} >Create oreder from link </a>
                            </span>
                     </div>

                    <div className='row'>
                        <span>
                           Item Image (please provide at least one)
                        </span>
                    </div>

                    <div className='row'>
                      <form className='create-oreder__form' >
                            <div className='form-group'>
                               <button type="button" className="btn getly___btn btn__upload-img">Upload image</button>
                            </div>
                            <div className="form-group">
                                <label htmlFor="item-name">Item Name</label>
                                 <input type="text" className="form-control create-oreder__inputs" id="item-name"  placeholder="Enter item name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Description-item">Description</label>
                                <textarea className="form-control create-oreder__textarea" id="Description-item" rows="3" placeholder='Describe your item (e.g color , width , size' ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="item-url">Item URL</label>
                                 <input type="text" className="form-control create-oreder__inputs" id="itemURL"  placeholder="Web link to the item (optional)"/>
                            </div>

                            <label htmlFor="item-price">Item price</label>
                            <div className="input-group  create-oreder__inputs__price_container">
                                    
                                <div className="input-group-prepend">
                                    <span className="input-group-text input_doller__char">$</span>
                                </div>
                                
                                <input type="number" className="form-control create-oreder__inputs__price" id="itemPrice" aria-label="Amount (to the nearest dollar)" placeholder='Enter item price' />
                             </div>
                             <div className="form-group">
                                <label htmlFor="item-Quantity">Quantity</label>
                                <div className='create__order__quantity' >
                                        
                                      <span className='create__order__quantity__minus' onClick={this.handlemines} >-</span>
                                             <span className='create__order__quantity__value' >{this.state.Quantity}</span>
                                       <span className='create__order__quantity__plus' onClick={this.handleplus} >+</span>
                                    
                                </div>
                            </div>
                            <hr/>

                            <div className='form-group'>
                               <button type="button"  className="btn getly___btn btn__create-order-next1" onClick={this.tostep2} >Next</button>
                            </div>


                         




                       </form>  
                      </div>

                </div>


                
                </div>
               
                {/*--------from whare---------- */}


                     <div className='create-order__step2' >                

                        <div className='from-whare__form' >
                            <div className='row' >
                             <h3 className='create__order__title__h3' >Where is your item going?</h3>  
                                <p>Tell us which city to bring your item to. You’ll coordinate the exact delivery location and address with the
                                     traveler who brings you your item, so you only need to tell us the city right now.</p>
                            </div>
                            <div className='row'>
                                <form className='create-oreder__form__from-where' >
                                      

                                       <div className='form-group' >
                                    

                                         <MuiThemeProvider muiTheme={muiTheme}>
                                              <AutoComplete
                                                hintText="from where (select form options)"
                                                className='create-order__city__input'
                                                 dataSource={this.state.dataSource}
                                                 onUpdateInput={this.handleUpdateInput}
                                                 filter={AutoComplete.caseInsensitiveFilter}
                                                 fullWidth={true}
                                                 openOnFocus={false}
                                                 disableFocusRipple={false}
                                                            />
                                                </MuiThemeProvider>
                                         </div>
                                         
                                         <div className='form-group' >
                                         <MuiThemeProvider muiTheme={muiTheme}>
                                              <AutoComplete
                                                hintText="deliver to (select form options)"
                                                className='create-order__city__input'
                                                 dataSource={this.state.dataSource}
                                                 onUpdateInput={this.handleUpdateInput}
                                                 filter={AutoComplete.caseInsensitiveFilter}
                                                 fullWidth={true}
                                                 openOnFocus={false}
                                                 disableFocusRipple={false}
                                                            />
                                                </MuiThemeProvider>
                                         </div>
                                       
                                         <div className="form-group">
                                                <MuiThemeProvider muiTheme={muiTheme}>
                                                    <DatePicker  className='signup_DatePicker'
                                                        hintText="Deliver before(optional)"
                                                        value={this.state.Deliverbefore}
                                                        onChange={this.handleDeliverbefore}
                                                    />
                                                </MuiThemeProvider>
                                             </div>
                                             <div className="form-group">
                                                <textarea className="form-control create-oreder__textarea" id="notr-to-traveler" rows="3" placeholder='If you want to tall your traveler anything write note (optional)  .' ></textarea>
                                            </div>

                                             <div className='form-group'>
                                                <button type="button" className="btn getly___btn btn__create-order-next2" onClick={this.tostep3} >Next</button>
                                             </div>
                                  
                                </form>
                                
                            </div>
                        </div>

                            
                     </div>


                       {/*--------checkout&&delivery---------- */}

                                            <div className='create-order__step3' >                

                                                <div className='checkout__form' >
                                                    <div className='row' >
                                                         <h3 className='create__order__title__h3' >Almost there! Now, review your details.</h3>  
                                                    </div>
                                                   
                                                    <div className='row' >
                                                        <div className='col-md-5' >
                                                            <div className='Oreder-image' >
                                                                <img className='Oreder-image__img' src={require('../../../Assets/img/iphone6s.jpg')} />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-7' >
                                                            <div  className='Oreder-name'> Iphone 7s plus</div>
                                                             <p>
                                                             What's the best approach for developing an application with JavaScript?
                                                             </p>

                                                            <div className='oreder__details' >
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
                                                    <div className='row'>
                                                        <p>Below is the Estimated  price summary for your order delivery</p>
                                                    </div>
                                                    <hr/>
                                                   
                                                    <div className='row'>
                                                        <div className='col-md-6' >
                                                                <span>Item price</span>
                                                        </div>
                                                        <div className='col-md-6' >
                                                                <span>$<span>6</span></span>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6' >
                                                                <span>Sales Tax (estimated)</span>
                                                        </div>
                                                        <div className='col-md-6' >
                                                                <span>$<span>0</span></span>
                                                        </div>
                                                        <div className='col-md-12' >
                                                        <span>
                                                           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                        </span>
                                                      </div>

                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6' >
                                                                <span>Traveler Fee</span>
                                                        </div>
                                                        <div className='col-md-6' >
                                                                <span>$<span>10</span></span>
                                                        </div>
                                                        <div className='col-md-12' >
                                                        <span>
                                                           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                        </span>
                                                      </div>

                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6' >
                                                                <span>Service Fee</span>
                                                        </div>
                                                        <div className='col-md-6' >
                                                                <span>$<span>2</span></span>
                                                        </div>
                                                        <div className='col-md-12' >
                                                        <span>
                                                           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                        </span>
                                                      </div>

                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6' >
                                                                <span>Estimated Total</span>
                                                        </div>
                                                        <div className='col-md-6' >
                                                                <span>$<span>10</span></span>
                                                        </div>
                                                        <div className='col-md-12' >
                                                        <span>
                                                           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                        </span>
                                                      </div>

                                                    </div>

                                                    <hr/>

                                                    <div className='row' >
                                                        <span>By publishing my order, I agree to <a href='#' > Getly's terms and conditions</a> </span>
                                                    </div>

                                                     <div className='form-group'>
                                                            <button type="button" className="btn getly___btn btn__create-order-next3"  >publish my order</button>
                                                      </div>
                                                   
                                                   
                                                </div>

                                                    
                                                </div>


                    





                  </div>
            </section>

           </div>
        );
    }
}

export default createOrderContainer;