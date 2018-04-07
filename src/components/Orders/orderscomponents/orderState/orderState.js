import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './orderState.css';

class orderState extends Component {


  

      getlyrequested = ()=> {
          this.props.history.push(`/getlyrequested`);
           window.scrollTo(0, 0);
     }
      getlyOntheway = ()=> {
          this.props.history.push(`/getlyontheway`);
           window.scrollTo(0, 0);
     }
      getlyReceived = ()=> {
          this.props.history.push(`/getlyreceived`);
           window.scrollTo(0, 0);
     }




    render() {
        return (
            <div>
               <div className='Nav__Cont offset-2 col-8'>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-Requested-tab" data-toggle="tab" href="#nav-Requested" role="tab" aria-controls="nav-Requested" aria-selected="true">                
                        <span>1</span> Requested
                            </a>
                            <a className="nav-item nav-link" id="nav-Ontheway-tab" data-toggle="tab" href="#nav-Ontheway" role="tab" aria-controls="nav-Ontheway" aria-selected="false">
                            <span>1</span> On the way to you</a>
                            <a className="nav-item nav-link" id="nav-Received-tab" data-toggle="tab" href="#nav-Received" role="tab" aria-controls="nav-Received" aria-selected="false">
                            <span>1</span> Received</a>

                        </div>
                    </nav>
                    
                 </div>
                 <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-Requested" role="tabpanel" aria-labelledby="nav-Requested-tab">
                                    <div className='tap__container' >
                                      <div className='row' > 
                                            <div className='col-md-12 ' >
                                                        <div  className='getly-details' onClick={this.getlyrequested} >

                                                        <div className='row ' >
                                                            <div className='col-md-3' >
                                                                <div className='Oreder-image' >
                                                                    <img className='Oreder-image__img' src={require('../../../../Assets/img/iphone6s.jpg')} />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-9' >
                                                                <div  className='Oreder-name'> Iphone 7s plus</div>
                                                                <span>Koloa Surf(tm) Text Logo Classic Crewneck Sweatshirt.  it’s a real value.. 
                                                                    Printed with Koloa(tm) Printed on front of Sweatshirt</span>


                                                            </div>

                                                            </div>
                                                            
                                                            <div className='row' >
                                                                
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

                                                        
                                                            <div className='row' >
                                                                <div className='col-md-10' >
                                                                    <span>Offers</span>
                                                                </div>
                                                                <div className='col-md-2' >
                                                                    <span>3</span>
                                                                </div>
                                                            </div>
                                                       
                                                            <hr />
                                                            <div className='row' >
                                                                <div className='col-md-10' >
                                                                    <span>Item Price</span>
                                                                </div>
                                                                <div className='col-md-2' >
                                                                    <span>$<span>208</span></span>
                                                                </div>
                                                            </div>

                                                            </div>

                                                </div>
                                    
                                    </div>
                                  </div>
                        
                        </div>
                        <div className="tab-pane fade" id="nav-Ontheway" role="tabpanel" aria-labelledby="nav-Ontheway-tab">    

                                                                <div className='tap__container' >
                                      <div className='row' > 
                                            <div className='col-md-12 ' >
                                                        <div  className='getly-details' onClick={this.getlyOntheway}>

                                                        <div className='row ' >
                                                            <div className='col-md-3' >
                                                                <div className='Oreder-image' >
                                                                    <img className='Oreder-image__img' src={require('../../../../Assets/img/iphone6s.jpg')} />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-9' >
                                                                <div  className='Oreder-name'> Iphone 7s plus</div>
                                                                <span>Koloa Surf(tm) Text Logo Classic Crewneck Sweatshirt.  it’s a real value.. 
                                                                    Printed with Koloa(tm) Printed on front of Sweatshirt</span>


                                                            </div>

                                                            </div>
                                                            
                                                            <div className='row' >
                                                                
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

                                                        
                                                            <div className='row' >
                                                                <div className='col-md-9' >
                                                                    <span>Your traveler</span>
                                                                </div>
                                                                <div className='col-md-3' >
                                                                  <span className='Order__maker-Name' >Ahmed</span>
                                                                   <img className='Order__maker-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                                                                </div>
                                                            </div>
                                                       
                                                            <hr />
                                                            <div className='row' >
                                                                <div className='col-md-10' >
                                                                    <span>Item Price</span>
                                                                </div>
                                                                <div className='col-md-2' >
                                                                    <span>$<span>208</span></span>
                                                                </div>
                                                            </div>

                                                            </div>

                                                </div>
                                    
                                    </div>
                                  </div>
                                
                        </div>
                        <div className="tab-pane fade" id="nav-Received" role="tabpanel" aria-labelledby="nav-Received-tab">

                                <div className='tap__container' >
                                      <div className='row' > 
                                            <div className='col-md-12 ' >
                                                        <div  className='getly-details' onClick={this.getlyReceived}>

                                                        <div className='row ' >
                                                            <div className='col-md-3' >
                                                                <div className='Oreder-image' >
                                                                    <img className='Oreder-image__img' src={require('../../../../Assets/img/iphone6s.jpg')} />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-9' >
                                                                <div  className='Oreder-name'> Iphone 7s plus</div>
                                                                <span>Koloa Surf(tm) Text Logo Classic Crewneck Sweatshirt.  it’s a real value.. 
                                                                    Printed with Koloa(tm) Printed on front of Sweatshirt</span>


                                                            </div>

                                                            </div>
                                                            
                                                            <div className='row' >
                                                                
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

                                                        
                                                            <div className='row' >
                                                                <div className='col-md-9' >
                                                                    <span>Your traveler</span>
                                                                </div>
                                                                <div className='col-md-3' >
                                                                  <span className='Order__maker-Name' >Ahmed</span>
                                                                   <img className='Order__maker-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                                                                </div>
                                                            </div>
                                                       
                                                            <hr />
                                                            <div className='row' >
                                                                <div className='col-md-10' >
                                                                    <span>Item Price</span>
                                                                </div>
                                                                <div className='col-md-2' >
                                                                    <span>$<span>208</span></span>
                                                                </div>
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

export default  withRouter(orderState);
