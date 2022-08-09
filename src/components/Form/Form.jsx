import React from 'react';
import './Form.scss';
import img from '../../image/illustration.svg'

const Form = () => {
    return (
        <div className="form">
            <div className="container">
                <header>
                    <h6>Don’t miss anything</h6>
                    <h1>Subscribe to the Createx School announcements</h1>
                </header>
                <form action="">
                    <input type="text" placeholder="Your working email" value=""/>
                    <button type="button">Subscribe</button>
                </form>
                <div className="image">
                    <img className="img-left" src={img} alt="image"/>
                    <img className="img-right" src={img} alt="image"/>
                </div>
            </div>
        </div>
    );
};

export default Form;