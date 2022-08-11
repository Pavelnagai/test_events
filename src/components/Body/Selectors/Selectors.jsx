import React, {useState} from 'react';
import './Selectors.scss';
import grid from '../../../icon/grid.svg'
import list from '../../../icon/list.svg'

const Selectors = ({listForm}) => {
    const onClickIcon = (value) => {
        listForm(value)
    }
    return (
        <div className="selectors">
            <div className="eventCategory">
                <div>Event category</div>
                <div><select name="category" id="category">
                    <option selected value="allThemes">all themes</option>
                    <option value="newFirst">new first</option>
                    <option value="theOld">the old</option>
                </select></div>
            </div>
            <div className="sortBy">
                <div>Sort by</div>
                <div><select name="sort" id="sort">
                    <option value="newest">newest</option>
                    <option value="theOld">theOld</option>
                </select></div>
            </div>
            <div className="show">
                <div>Show</div>
                <div><select name="page" id="page">
                    <option selected value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                </select></div>
                <p>events per page</p>
            </div>
            <div className="form">
                <input type="text" placeholder="Search event..."/>
            </div>
            <div className="radio">
                <i onClick={() => onClickIcon(true)}><img src={list} alt=""/></i>
                <i onClick={() => onClickIcon(false)}><img src={grid} alt=""/></i>
            </div>
        </div>
    );
};

export default Selectors;