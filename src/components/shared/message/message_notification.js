import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import {Link} from 'react-router-dom';import './message_notification.css';
import invite from '../../../Assets/img/invite.svg';
import close from '../../../Assets/img/close.svg'


class message_notification extends Component {

    openchat= () =>{
        this.props.history.push('/conversations');
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className='Message__Notify'>
                <div>
                   <div className='Message__sub' onClick={this.openchat}>
                        <div className='Message__Element'>Messages <span></span></div> 
                        <div className='Message__viewAll'>View All</div>
                   </div>
                 {/*   <div className='Message__sub'>
                        <div className='Message__Element'>Notification <span></span></div>
                        <div className='Message__viewAll'>View All</div>  
                   </div> */}
                   <div className='Message__sub'>
                        <div className='not__element'><img className='not__photo' src={invite}/></div>
                        <div className='not__element'>Add your work email. Unlock premium support and other extra perks for business trips.</div>
                        <div className='not__element__cross'><img className='Cross__img' src={close}></img></div>  
                   </div>
                   <div className='Message__sub'>
                        <div className='not__element' ><img className='not__photo' src={invite}/></div>
                        <div className='not__element'>Add your work email. Unlock premium support and other extra perks for business trips.</div>
                        <div className='not__element__cross'><img className='Cross__img' src={close}></img></div>  
                   </div>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default withRouter(message_notification);
