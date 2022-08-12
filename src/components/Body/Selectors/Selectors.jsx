import React from 'react';
import './Selectors.scss';
import {useDispatch} from "react-redux";
import {onSelected, onSelectedTime, searchValue} from "../../../store/filterReducer";

const Selectors = ({listForm, flag}) => {
    const dispatch = useDispatch()
    const onClickIcon = (value) => listForm(value)
    const handlerSearch = (e) => {
        dispatch(searchValue({searchValue: e.target.value}))
    }
    const handlerSelect = (e) => {
        dispatch(onSelected({selectValue: document.getElementById('sort').value}))
    }
    const handleSelectTime = (e) => {
        dispatch(onSelectedTime({selectedValueTime: document.getElementById('time').value}))
    }
    return (
        <div className="selectors">
            <div className="eventCategory">
                <div>Event category</div>
                <div>
                    <select name="time" id="time" onChange={handleSelectTime} defaultValue="newFirst">
                        <option value="newFirst">new first</option>
                        <option value="theOld">the old</option>
                    </select>
                </div>
            </div>
            <div className="sortBy">
                <div>Sort by</div>
                <div>
                    <select name="sort" id="sort" onChange={handlerSelect} defaultValue="all">
                        <option value="all">all</option>
                        <option value="dog">dog</option>
                        <option value="bird">bird</option>
                        <option value="fish">fish</option>
                        <option value="snake">snake</option>
                        <option value="crocodilia">crocodilia</option>
                        <option value="bear">bear</option>
                        <option value="cetacean">cetacean</option>
                        <option value="rabbit">rabbit</option>
                        <option value="lion">lion</option>
                        <option value="cat">cat</option>
                        <option value="cow">cow</option>
                    </select>
                </div>
            </div>
            <div className="show">
                <div>Show</div>
                <input type="number" min={9} max={15} step={3} defaultValue={9}/>
                <p>events per page</p>
            </div>
            <div className="form">
                <div>
                    <input onInput={handlerSearch} type="text" placeholder="Search event..."/>
                    <i className="icon-search"/>
                </div>
            </div>
            <div className="radio">
                <i onClick={() => onClickIcon(true)}
                   className={`icon-list icon ${flag ? 'icon--active' : ''}`}/>
                <i onClick={() => onClickIcon(false)}
                   className={`icon-grid icon ${!flag ? 'icon--active' : ''}`}/>
            </div>
        </div>
    );
};

export default Selectors;