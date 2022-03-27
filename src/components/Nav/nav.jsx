import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav-style.css';

class Nav extends Component {
    render () {
        return (
            <div>
               <ul class={this.props.navStyle}>
                    <li><Link to={"/portfolio"}>portfolio</Link></li>
                </ul>
             </div>
        )
    }
}

export default Nav;