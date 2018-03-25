import React, { Component } from 'react';
import './Header2.css';





class Header extends Component {
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
                                Join Getly community and help shoppers across MENA
                            </h1>
                            
                        </div>

                        <div className='container search__City' > 
                         <form  className="header__box__search row">
                           

                            <div className="input-group header__box__search__input  mb-3 col-md-5">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">From</span>
                                </div>
                                <input type="text" className="form-control"  placeholder=" City or Country" aria-label="fromcity" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group header__box__search__input mb-3 col-md-5">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">To</span>
                                </div>
                                <input type="text" className="form-control"  placeholder=" City or Country" aria-label="fromcity" aria-describedby="basic-addon1"/>
                            </div>
                            
                            <button type="button" className="btn getly___btn header__box__Shearch__btn col-md-2">Search</button>

                        </form>

                        </div>
                    </div>
                </div>
               

              

            </div>
        );
    }
}

export default Header;
