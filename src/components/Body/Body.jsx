import React, {useState} from 'react';
import './Body.scss';
import Lectures from "./Lectures/Lectures";
import {useSelector} from "react-redux";
import Selectors from "./Selectors/Selectors";
import LecturesGrid from "./LecturesGrid/LecturesGrid";

const Body = () => {
    const state = useSelector(state => state.stateReducer)
    const [list, setList] = useState(true)
    const listForm = (value) => {
        setList(value)
    }
    return (
        <div className="body">
            <div className="containerBody">
                <div className="header">
                    <h6>Our events</h6>
                    <h1>Lectures, workshops & master-classes</h1>
                </div>
            </div>
            <div>
                <Selectors listForm={listForm}/>
            </div>
            <div className={list ? "lectur" : "grid"}>
                {state.map((el, i) => {
                    return list ?
                        <Lectures key={i} type={el.type} title={el.title} date={el.date}/>
                        : <LecturesGrid key={i} type={el.type} title={el.title} date={el.date}/>
                })}
            </div>
        </div>
    );
};

export default Body;