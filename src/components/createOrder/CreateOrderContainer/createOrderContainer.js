import React, { Component } from 'react';
import './createOrderContainer.css';

class createOrderContainer extends Component {
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

                        <div className='col-md-4' >
                            <div className='createOrder__steps__step' >
                                <img className='createOrder__step__img'  src={require('../../../Assets/img/shopping-bag.svg')} />
                                <span className='createOrder__step__text  createOrder__step__text__active' >tell us about your item</span>
                            </div>
                        </div>
                        <div className='col-md-4' >
                            <div className='createOrder__steps__step' >
                                <img className='createOrder__step__img'  src={require('../../../Assets/img/shopping-bag.svg')} />
                                <span className='createOrder__step__text' >from where do you wanna get your item</span>
                            </div>
                        </div>
                        <div className='col-md-4' >
                            <div className='createOrder__steps__step' >
                                <img className='createOrder__step__img'  src={require('../../../Assets/img/shopping-bag.svg')} />
                                <span className='createOrder__step__text' >Checkout & get it with getly </span>
                            </div>
                        </div>
            
                    </div>
                    <div className='row' >
                        <div className='col-md-12' ></div>
                        <h3>tell us about your item</h3>
                        <p>If your item from online store get the Link and paste below</p>
                    </div>

                    <div className='row' >
                        <div className='col-md-9 create-oreder__inputs_col' >
                          <div class="form-group">
                                <input type="text" class="form-control create-oreder__inputs" id="itemlink"  placeholder="paste a link"/>
                            </div>
                        </div>
                        <div className='col-md-3'>
                             <button type="button" className="btn getly___btn btn-create-oreder">Create Order</button>
                        </div>
                    </div>
                    <div className='row'>
                        <a href='#'>If your item in offline store add details manually</a>
                    </div>
                    <div className='row'>
                        <span>
                           If your item from online store get the Link?<a href='#'>Create oreder from link </a>
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
                            <div class="form-group">
                                <label for="item-name">Item Name</label>
                                 <input type="text" class="form-control create-oreder__inputs" id="item-name"  placeholder="Enter item name"/>
                            </div>
                            <div class="form-group">
                                <label for="Description-item">Description</label>
                                <textarea class="form-control create-oreder__textarea" id="Description-item" rows="3" placeholder='Describe your item (e.g color , width , size' ></textarea>
                            </div>
                            <div class="form-group">
                                <label for="item-url">Item URL</label>
                                 <input type="text" class="form-control create-oreder__inputs" id="item-url "  placeholder="Web link to the item (optional)"/>
                            </div>

                            <label for="item-price">Item URL</label>
                            <div class="input-group ">
                                    
                                <div class="input-group-prepend">
                                    <span class="input-group-text input_doller__char">$</span>
                                </div>
                                
                                <input type="number" class="form-control create-oreder__inputs__price" id='item-price ' aria-label="Amount (to the nearest dollar)" placeholder='Enter item price' />
                             </div>
                             <div class="form-group">
                                <label for="item-Quantity">Quantity</label>
                                <div>
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                            </div>
                            <hr/>

                            <div className='form-group'>
                               <button type="button" className="btn getly___btn btn__create-order-next1">Next</button>
                            </div>




                       </form>  
                    </div>
                    





               </div>
           </section>

           </div>
        );
    }
}

export default createOrderContainer;
