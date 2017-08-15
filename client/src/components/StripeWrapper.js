import React, { Component } from "react";
import StripeCheckOut from "react-stripe-checkout";

import { connect } from "react-redux";
import * as actions from "../actions";

class StripeWrapper extends Component {
    render() {
        // amount: us dollar in cents
        // callback: when we got the token from stripe
        // stripeKey: stripe publishable key
        // fake card: 424242424242
        return (
            <StripeCheckOut
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                name="Emaily"
                description="$5 for 5 email credits"
            >
                <button className="btn">Add Credits</button>
            </StripeCheckOut>
        );
    }
}

export default connect(null, actions)(StripeWrapper);