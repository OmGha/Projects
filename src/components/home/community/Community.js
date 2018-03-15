import React, { Component } from 'react';
import './Community.css';
import Parallaximg from 'react-image-parallax2';

class Community extends Component {
    render() {
        return (
            <section className="community" >
              <Parallaximg    reduceHeight={0.52} src={require('../../../Assets/img/community.jpg')}></Parallaximg>

              <div className="community__itmes" >

                    <div className='container'>
                       
                             <h1 className='community__itmes__h1' >Join to Getly community</h1>
                             <h1 className='community__itmes__h1' >Create Oreder or Make money</h1>

                        

                          <div className="row">
                             <button type="button" className="btn getly___btn community__join__facebook">Join With Facebook</button>
                          </div>
                          <div className="row">
                             <button type="button" className="btn getly___btn community__join__email">Sing Up with Email</button>
                          </div>


                    </div>

                   

                  


              </div>
            </section>
        );
    }
}

export default Community;
