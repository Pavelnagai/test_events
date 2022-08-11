import React from 'react';
import './Footer.scss';
import logo from '../../image/logo.svg'
import icon1 from '../../icon/Vector.svg'
import icon2 from '../../icon/Vector (1).svg'
import icon3 from '../../icon/Vector (2).svg'
import icon4 from '../../icon/YouTube.svg'
import icon5 from '../../icon/Vector (3).svg'
import icon6 from '../../icon/Vector (4).svg'

const Footer = () => {
    return (<div className="footer">
        <div className="top">
            <div className="container">
                <div className="col_1">
                    <img src={logo} alt="logo"/>
                    <p>Createx Online School is a leader in online studying. We have lots of courses and programs
                        from the main market experts. We provide relevant approaches to online learning, internships
                        and employment in the largest companies in the country. </p>
                    <div className="icons">
                        <div className="icon"><a href=""></a><img src={icon1} alt=""/></div>
                        <div className="icon"><a href=""></a><img src={icon2} alt=""/></div>
                        <div className="icon"><a href=""></a><img src={icon3} alt=""/></div>
                        <div className="icon"><a href=""></a><img src={icon4} alt=""/></div>
                        <div className="icon"><a href=""></a><img src={icon5} alt=""/></div>
                        <div className="icon"><a href=""></a><img src={icon6} alt=""/></div>
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
                    <p href="">hello@createx.com</p>
                </div>
                <div className="col_5">
                    <h6>SIGN UP TO OUR NEWSLETTER</h6>
                    <input type="text" placeholder="Email address" value="" onChange={() => {
                    }}/>
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
    </div>);
};

export default Footer;