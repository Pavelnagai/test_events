import React from 'react';
import './CreateSchool.scss';
import img from '../../image/illustration.svg'

const CreateSchool = () => {
    return (
        <div className="createSchool">
            <h6>Don’t miss anything</h6>
            <h1>Subscribe to the Createx School announcements</h1>
            <form className="form">
                <button type="button">Subscribe</button>
                <input type="text" placeholder="Your working email" value="" onChange={() => {
                }}/>
            </form>
            <img className="img-left" src={img} alt="icon"/>
            <img className="img-right" src={img} alt="icon"/>
        </div>
    );
};

export default CreateSchool;