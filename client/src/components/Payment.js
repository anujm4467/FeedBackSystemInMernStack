import React, { Component } from 'react'
import StripeCheckOut from 'react-stripe-checkout';
import  * as actions from '../actions';
import {connect} from 'react-redux';

class Payment extends Component {
  render() {
  
    return (
      <div>
        <StripeCheckOut
         name="Emaily Feedback System"
         description="5$ for 5 email credits" 
         amount={500}
         token={token =>{this.props.tokenHandler(token)}}
         stripeKey ={process.env.REACT_APP_STRIPE_KEY}
        >
         <button className="btn">
            Add Credits
         </button>
        </StripeCheckOut>        
      </div>
    )
  }
}

export default connect(null, actions)(Payment);