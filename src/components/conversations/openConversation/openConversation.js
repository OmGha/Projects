import React, { Component } from 'react';
import $ from 'jquery';
import './openConversation.css';

class openConversation extends Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            messages: [],
            
        };
        
    }
    

    componentWillMount(){
        console.log('componentDidMount');
        
        const usertoken =  localStorage.getItem("usertoken");
        const orderID =  1;
        console.log(`https://getlynow.herokuapp.com/auth/message`, usertoken , orderID);

        $.post( "https://getlynow.herokuapp.com/auth/message", {
            "token":usertoken,
            "item_id":orderID
        })
        .done(( data ) => {
            console.log(data);

            this.setState({messages:data})

            if(data.length >0){

                this.setState({senderid:data[0].sender_id});
                $(".conversations-boxs-message").scrollTop($(".conversations-boxs-message")[0].scrollHeight);

  
            }
          
        }
    );

    }
    sendMSG =() =>{
        var textMSG =$('.typing-input').val();

        console.log(textMSG);
        $('.typing-input').val('');
        const usertoken =  localStorage.getItem("usertoken");
        const orderID =  1;
        console.log(`https://getlynow.herokuapp.com/auth/SendMessage`, usertoken , orderID);

        $.post( "https://getlynow.herokuapp.com/auth/SendMessage", {
            "token":usertoken,
            "item_id":orderID,
            "message": textMSG,
        })
        .done(( data ) => {
            console.log(data.success);
            this.setState({messages:data.success})

            if(data.success.length >0){

                this.setState({senderid:data.success[0].sender_id});
                $(".conversations-boxs-message").scrollTop($(".conversations-boxs-message")[0].scrollHeight);

  
            }
        } );

    }


    render() {
        return (
            <div>
                <section className='conversations-sections'>
                    <div className="container">
                        <div className='row'>
                            <div className="col-md-4">
                            
                             <div className='conversations-boxs'>
                                <img className='Order__maker-img' src="https://image.flaticon.com/icons/svg/265/265674.svg"/> 
                                 <span className='Order__maker-Name' >Ahmed Shibob</span>
                             </div>

                             <div className='conversations-boxs'>
                                <div className='row' >
                                    <div className='col-md-5' >
                                        <div className='Oreder-image' >
                                            <img className='Oreder-image__img' src="https://mobizil.com/wp-content/uploads/2017/01/iphone-6-s-800x800.jpg" />
                                        </div>
                                    </div>
                                    <div className='col-md-7' >
                                        <div  className='Oreder-name'>i phoen</div>
                                            <p>do you need to order anything? Let me know asap</p>
                                
                                    </div>
                                    <div className='col-md-12' >
                                    <div className='oreder__details oreder__detailsx ' >
                                            <div className='oreder__details__tfb' >
                                                <div>Deliver to </div>
                                                <span>cairo</span>
                                            </div>
                                            <div className='oreder__details__tfb'>
                                                <div>Deliver from </div>
                                                <span> <span>us</span> </span>
                                            </div>
                                            <div className='oreder__details__tfb'>
                                                <div>Deliver before </div>
                                                <span><span>22 jun,2018</span></span>
                                            </div>
                                            <div className='oreder__details__tfb'>
                                                <div>Reward </div>
                                                <span><span>$65</span></span>
                                            </div>
                                            <div className='oreder__details__tfb'>
                                                <div>Item price</div>
                                                <span><span>$400</span></span>
                                            </div>

                                        </div>
                                
                                    </div>

                                    </div>
                             </div>

                            </div>
                            <div className="col-md-8">
                                <div className='conversations-boxs'>
                                    <div className="conversations-boxs-message">
                                            <div className="conversations-boxs-message-container">
                                      


                                                {
                                                    this.state.messages.length >0 ? 

                                                      this.state.messages.map(message => message.sender_id == this.state.senderid ? 
                                                        
                                                        <div key={message.ID}>
                                                        <span className="conversations-BOX-date">{message.created_at}</span>

                                                        <div className="row">
                                                          <img className='sender-img col-sm-2' src="https://image.flaticon.com/icons/svg/265/265674.svg"/> 
                                                            <span className="col-sm-8 sender-message">
                                                                          {message.message}
                                                            </span>
                                                        </div>
                                                        </div>
                                                        :
                                                        <div  key={message.ID}>
                                                        <span className="conversations-BOX-date">{message.created_at}</span>

                                                        <div className="row resever-message-box">
                                                          <img className='sender-img col-sm-2' src="https://image.flaticon.com/icons/svg/265/265674.svg"/> 
                                                            <span className="col-sm-8 resever-message"> {message.message}
                                                            </span>
                                                        </div>
                                                        </div>
                                                    
                                                    )

                                                    : "no message"
                                                }

                                          
                                             


                                            </div>
                                    </div>

                                    <div>
                                    <hr/>
                                    <div className="form-group row input-type-group">
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control typing-input" id="colFormLabel" placeholder="Type your message here"/>
                                        </div>
                                        <div className="col-sm-2">
                                            <button type="button" onClick={this.sendMSG} className="btn send-massage-btn">send</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </section>
            </div>
        );
    }
}

export default openConversation;
