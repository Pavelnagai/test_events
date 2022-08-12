import React from 'react';
import './Header.scss';
import logo from '../../image/logo 2.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="log">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="links">
                    <nav className="nav-link">
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Courses</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="buttons">
                    <button id="consultation" type="button"><span>Get consultation</span></button>
                    <button id="login" type="button"><span><p><i
                        className="icon-profile"></i>Log in / Register</p></span></button>
                </div>
            </div>
        </div>
    );
};

export default Header;