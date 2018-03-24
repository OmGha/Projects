import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './itemCreateOrderManually.css';


class itemCreateOrderManually extends Component {
    render() {
        return(
         <div className="row">
             <div className="container__OfItems offset-lg-3 col-lg-9">
            <div className="container__OfItems__createFromLink">
                <h6>Don’t want to add manually? </h6>
                <a href="#">Create order from link</a>
            </div>
            <div className="container__OfItems__uploadeImage">
            <span>Item Image (please provide at least one)</span><br/>
            <laple>
             <span>Uploade image</span>
              <input type="file" />
            </laple>

           </div>
            <div className="container__OfItems__Name">
                <span>Item Name</span><br/>
                <input type="text" placeholder="Enter item name"/>

            </div>
            <div className="container__OfItems__Description">
                <span>Description</span><br/>
                <input type="text" placeholder="Descripe your item"/>
                
            </div>
            <div className="container__OfItems__Url">
                <span>Item URL</span><br/>
                <input type="text" placeholder="Web link to the item (optional)"/>
                
            </div>
            <div className="container__OfItems__Price">
                <span>Item Price</span><br/>
                <input type="number" placeholder="Enter item price"/>
                
            </div>
            
            <div className="container__OfItems__Quantity">
                <button></button>
            </div>
        </div>

         </div>
      
        );
    }
}


export default withRouter(itemCreateOrderManually);