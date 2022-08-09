import React from 'react';
import './Footer.scss';
import logo from '../../image/logo.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="container">
                    <div className="col_1 el">
                        <img src={logo} alt="logo"/>
                        <p>Createx Online School is a leader in online studying. We have lots of courses and programs
                            from the main market experts. We provide relevant approaches to online learning, internships
                            and employment in the largest companies in the country. </p>
                        <div>
                            <div className="icon"></div>
                            <div className="icon"></div>
                            <div className="icon"></div>
                            <div className="icon"></div>
                            <div className="icon"></div>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="col_2 el">
                        <h6>SITE MAP</h6>
                        <a href="">About Us</a>
                        <a href="">Courses</a>
                        <a href="">Events</a>
                        <a href="">Blog</a>
                        <a href="">Contacts</a>

                    </div>
                    <div className="col_3 el">
                        <h6>COURSES</h6>
                        <nav>
                            <a href="">Marketing</a>
                            <a href="">Management</a>
                            <a href="">HR & Recruting</a>
                            <a href="">Design</a>
                            <a href="">Development</a>
                        </nav>
                    </div>
                    <div className="col_4 el">
                        <h6>CONTACT US</h6>
                        <nav>
                            <a href="">(405) 555-0128</a>
                            <a href="">hello@createx.com</a>
                        </nav>
                    </div>
                    <div className="col_5 el">
                        <h6>SIGN UP TO OUR NEWSLETTER</h6>
                        <input type="text" placeholder="Email address"/>
                        <p>*Subscribe to our newsletter to receive communications and early updates from Createx SEO
                            Agency.</p>
                    </div>


                </div>
            </div>


            <div className="bottom">
                <div className="container">
                    <div className="left"><p>© All rights reserved.</p><p>Made with</p><p>by Createx Studio </p></div>
                    <div className="right"><p>GO TO TOP</p></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;