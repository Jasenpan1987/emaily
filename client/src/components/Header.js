import React, { Component } from "react";

class Header extends Component {
    render(){
        return (
            <nav>
                <div className="nav-wrapper" style={{paddingLeft: 8}}>
                    <a href="#" className="brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        <li>
                            <a href="#">Sign in with Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;