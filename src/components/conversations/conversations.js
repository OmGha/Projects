import React, { Component } from 'react';
import $ from 'jquery';
import Discount from '../../Assets/img/discount.svg';
import '../Copouns/Copouns.css'

class conversations extends Component{

    constructor(props, context) {
        super(props, context);
        
        this.state={
            Messages: [],

        };
     
    }



    openConv = (Item_num) =>{
        this.props.history.push(`/openconv/${Item_num}`);
        window.scrollTo(0, 0);
    }

      

    componentWillMount(){
        console.log("++++++++++++++++++++++++++");

        const usertoken =  localStorage.getItem("usertoken");
        console.log(`https://getlynow.herokuapp.com/auth/listMessage`, usertoken );

        $.post( "https://getlynow.herokuapp.com/auth/listMessage", {
            "token":usertoken,
        })
        .done(( data ) => {
            console.log(data);
            this.setState({Messages:data})
            console.log(this.state.Messages);
          
              

        }
    );
        
    }

    render() {
        return (
            <div>
                <div className='Container' id='conCoupon'>
                    <div className='Coupon__Conatiner'>
                        <div className='Coupon__Header'>conversations</div>
                        <label></label>
                        <div className='Coupon__Section'>
                            <form>
                                <div className="form-row align-items-center">
                                    <div className="col-sm-9">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup"></label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                        <div className="input-group-text">find user</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter name"/>
                                    </div>
                                    </div>
                                    <div className="col-sm-3">
                                    <button type="submit" className="btn btn-primary mb-2" id='btn__Submit__Coupon'>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <label>6 CONVERSATIONS</label>
                        <div className='Coupon__Section' id='elementContainer'>


                                        {
                                                this.state.Messages.length > 0
                                                    ? this.state.Messages.map(Message =>           
                                                    
                                                    <div key={Message.Item_num} className='Message__Element' onClick={() => { this.openConv(Message.Item_num) }}  >
                                                    <div className="row" >
                                                          <div className="col-1">
                                                          <img className='nav__profile__img' src="https://image.flaticon.com/icons/svg/265/265674.svg"  />
                                                          </div>
                                                          <div className="col-10 Message__Element__body">
                                                          {Message.First_name}  {Message.Last_name}  <span>{Message.created_at}</span>
                                                          <p>{Message.message}</p>
                                                          </div>
                                                       </div>
                                                 </div> 
                                               )
                                                    : 'no Messages!'
                                            }

 


                           
                           
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default conversations;