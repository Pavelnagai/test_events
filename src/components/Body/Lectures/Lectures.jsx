import React from 'react';
import './Lectur.scss';

const Lectures = ({date, title, type}) => {
    const d = new Date(date).getDate()
    const clock = new Date(date).toLocaleTimeString().slice(0, -3); // 11:02
    const month = new Date(date).getMonth()
    const arrayMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',];
    console.log(title)
    return (<div className="lectures">
        <div className="data">
            <div className="day">{d < 10 ? "0" + d : d}</div>
            <div>
                <div className="month">{arrayMonth[month]}</div>
                <div className="clock">{clock}</div>
            </div>
        </div>
        <div className="title">
            <div id="title">{title}</div>
            <p id="type">{type}</p>
        </div>
        <div className="button">
            <button type="button">View more</button>
        </div>
    </div>);
};

export default Lectures;