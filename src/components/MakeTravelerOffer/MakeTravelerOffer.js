import React, { Component } from 'react';
import TravelerOffer from './TravelerOffer/TravelerOffer';

class MakeTravelerOffer extends Component {
    render() {
        return (
            <div>
               
                    <TravelerOffer orderID={this.props.match.params.orderID} />
               
            </div>
        );
    }
}

export default MakeTravelerOffer;
