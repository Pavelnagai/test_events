import React, {useEffect, useState} from 'react';
import './Body.scss';
import Lectures from "./Lectures/Lectures";
import {useSelector} from "react-redux";
import Selectors from "./Selectors/Selectors";
import LecturesGrid from "./LecturesGrid/LecturesGrid";

const Body = () => {
    const state = useSelector(state => state.stateReducer)
    const filterReducerState = useSelector(state => state.filterReducer)
    const [list, setList] = useState(true)
    const [foundItem, setFoundItem] = useState(state)

    function sortByDate(value) {
        const copyState = [...state]
        copyState.sort(function (a, b) {
            return value
                ? Number(new Date(b.date)) - Number(new Date(a.date))
                : Number(new Date(a.date)) - Number(new Date(b.date));
        });
        setFoundItem(copyState)
    }

    useEffect(() => {
        setFoundItem(state.filter(f => f.title.toLowerCase().includes(filterReducerState.searchValue.toLowerCase())))
    }, [state, filterReducerState.searchValue])

    useEffect(() => {
        if (filterReducerState.selectValue === "all") {
            setFoundItem(state)
        } else {
            setFoundItem(state.filter((el) => el.type === filterReducerState.selectValue))
        }
    }, [filterReducerState.selectValue])

    useEffect(() => {
        if (filterReducerState.selectedValueTime === "theOld") {
            sortByDate(false)
        } else {
            sortByDate(true)
        }
    }, [filterReducerState.selectedValueTime])

    useEffect(() => {
        sortByDate(true)
    }, [])

    const listForm = (value) => {
        setList(value)
    }
    return (
        <div className="body">
            <div className="containerBody">
                <h6>Our events</h6>
                <h1>Lectures, workshops & master-classes</h1>
            </div>
            <Selectors listForm={listForm} flag={!!list}/>
            <div className={list ? "list" : "grid"}>
                {foundItem.map((el, i) => {
                    return list ?
                        <Lectures key={i} type={el.type} title={el.title} date={el.date}/>
                        : <LecturesGrid key={i} type={el.type} title={el.title} date={el.date}/>
                })}
            </div>
        </div>
    );
};

export default Body;