import React, { Component } from 'react';
import '../Offers/Offers.css';
import { withRouter } from 'react-router-dom';

class Offers extends Component {

    openOffer=()=>{
        this.props.history.push('/offerState');
    }

    render() {
        return (
            
          <div className='Offer' onClick={this.openOffer} >
                <div className='row' >
                    <div className='col-md-6' >
                       <img className='Offer__maker-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                        <span className='Offer__maker-Name' >Abdelaleem</span>
                    </div>
                    <div className='col-md-6' >
                        <div className='Offer__time' >
                        <span className='span__color'>State is : </span>

                         <span className='StateOfferView'> Offer Accepted</span>
                      </div>
                    </div>
                </div>

                <div className='row' >
                    <div className='col-md-5' >
                         <div className='Offer-image' >
                             <img className='Offer-image__img' src={require('../../../Assets/img/iphone6s.jpg')} />
                        </div>
                    </div>
                    <div className='col-md-7' >
                         <div  className='Offer-name'> Iphone 7s plus</div>

                         <div className='offer__details' >
                             <div className='offer__details__tfb' >
                                 <div>Deliver to </div>
                                 <span> Cairo, EG</span>
                             </div>
                             <div className='offer__details__tfb'>
                                 <div>Deliver from </div>
                                 <span> New York,US </span>
                             </div>
                             <div className='offer__details__tfb'>
                                 <div>Deliver before </div>
                                 <span> March 20, 2018</span>
                             </div>

 
                         </div>

                         <div className='row' >
                            <div className='col-md-7'>
                                <span className='span__color'>Traveler fee </span>
                                    <span> $25</span>
                                <div>
                                    <span className='span__color'>Item price: </span><span> $125</span>
                                </div>

                            </div>
                    
                </div>

                    </div>
                </div>

               
              
            </div>
            
            
        );
    }
}

export default withRouter(Offers) ;
