import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.css';

import Logo from './hraacf-logo.png';

class NavBar extends React.Component {
    render() {
        return (
            <div className="outer-container">
                <div className="inner-container">
                    <div className="nav-body">
                        <NavLink to = "/">
                            <img src={ Logo } alt="AACF" width="75" />
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink to="/churches">
                                   Churches
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;