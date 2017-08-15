import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "./StripeWrapper";

class Header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
            return;

            case false:
            return (
                <li>
                    <a href="/auth/google">Login with google</a>
                </li>
            );

            default:
            return (
                [
                    <li key="payment"><Payment /></li>,
                    <li 
                        style={{margin: '0 10px'}}
                        key="credits"
                    >{`Credits: ${this.props.auth.credits}`}</li>,
                    <li key="logout"><a href="/api/logout">Logout</a></li>
                ]
            );
        }
    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper" style={{paddingLeft: 8}}>
                    <Link
                        to={this.props.auth ? "/surveys" : "/"}
                        className="brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Header);