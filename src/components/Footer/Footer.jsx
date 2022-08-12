import React from 'react';
import './Footer.scss';
import logo from '../../image/logo.svg'

const Footer = () => {
    return (<div className="footer">
        <div className="top">
            <div className="container">
                <div className="col_1">
                    <img src={logo} alt="logo"/>
                    <p>Createx Online School is a leader in online studying. We have lots of courses and programs
                        from the main market experts. We provide relevant approaches to online learning, internships
                        and employment in the largest companies in the country. </p>
                    <div className="group_icons">
                        <a className="group_icons__el" href="https://www.facebook.com/"><i
                            className="icon-facebook"/></a>
                        <a className="group_icons__el" href="https://twitter.com/?lang=ru"><i className="icon-twitter"/></a>
                        <a className="group_icons__el" href="https://www.youtube.com/"><i
                            className="icon-youtube-play"/></a>
                        <a className="group_icons__el" href="https://web.telegram.org/k/"><i className="icon-telegram"/></a>
                        <a className="group_icons__el" href="https://www.instagram.com/"><i className="icon-instagram"/></a>
                        <a className="group_icons__el" href="https://ru.linkedin.com/"><i
                            className="icon-linkedin"/></a>
                    </div>
                </div>
                <div className="col_2">
                    <h6>SITE MAP</h6>
                    <a href="">About Us</a>
                    <a href="">Courses</a>
                    <a href="">Events</a>
                    <a href="">Blog</a>
                    <a href="">Contacts</a>

                </div>
                <div className="col_3">
                    <h6>COURSES</h6>
                    <nav>
                        <a href="">Marketing</a>
                        <a href="">Management</a>
                        <a href="">HR & Recruting</a>
                        <a href="">Design</a>
                        <a href="">Development</a>
                    </nav>
                </div>
                <div className="col_4">
                    <h6>CONTACT US</h6>
                    <p>(405) 555-0128</p>
                    <p>hello@createx.com</p>
                </div>
                <div className="col_5">
                    <h6>SIGN UP TO OUR NEWSLETTER</h6>
                    <div className="col_5__input">
                        <input type="text" placeholder="Email address" value="" onChange={() => {
                        }}/>
                        <i className="icon-right"/>
                    </div>
                    <p>*Subscribe to our newsletter to receive communications and early updates from Createx SEO
                        Agency.</p>
                </div>


            </div>
        </div>
        <div className="bottom">
            <div className="container">
                <div>
                    <span>© All rights reserved.Made with</span>
                    <i></i>
                    <span>by Createx Studio</span>
                </div>
                <div>GO TO TOP</div>
            </div>
        </div>
    </div>);
};

export default Footer;