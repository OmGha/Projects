import React, { Component } from 'react';
import '../To_Delivers/To_Delivers.css';
import { withRouter } from 'react-router-dom';

class To_Delivers extends Component {

    openTo_Delivers=()=>{
        this.props.history.push('/ToDeliverState');
    }

    render() {
        return (
            
          <div className='To_Delivers' onClick={this.openTo_Delivers} >
                <div className='row' >
                    <div className='col-md-6' >
                       <img className='To_Delivers__maker-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                        <span className='Order__maker-Name' >Ahmed</span>
                    </div>
                    <div className='col-md-6' >
                        <div className='To_Delivers__time' >
                            <div >
                                requested
                        
                                <span> 1 hour ago</span>
                            </div>
                      </div>
                    </div>
                </div>

                <div className='row' >
                    <div className='col-md-5' >
                         <div className='To_Delivers-image' >
                             <img className='To_Delivers-image__img' src={require('../../../Assets/img/iphone6s.jpg')} />
                        </div>
                    </div>
                    <div className='col-md-7' >
                         <div  className='To_Delivers-name'> Iphone 7s plus</div>

                         <div className='To_Delivers__details' >
                             <div className='To_Delivers__details__tfb' >
                                 <div>Deliver to </div>
                                 <span> Cairo, EG</span>
                             </div>
                             <div className='To_Delivers__details__tfb'>
                                 <div>Deliver from </div>
                                 <span> New York,US </span>
                             </div>
                             <div className='To_Delivers__details__tfb'>
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

export default withRouter(To_Delivers) ;
