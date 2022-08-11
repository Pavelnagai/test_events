import React from 'react';
import './LecturesGrid.scss';

const LecturesGrid = ({date, title, type}) => {
    const d = new Date(date).getDate()
    const clock = new Date(date).toLocaleTimeString().slice(0, -3); // 11:02
    const month = new Date(date).getMonth()
    const arrayMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',];
    return (<>
            <div className="lecturesGrid">
                <h3>{d}{arrayMonth[month].slice(0, 3)}</h3>
                <p>{clock}</p>
                <div>
                    {title}
                </div>
                <p>{type}</p>
                <button type="button">
                    View more
                </button>
            </div>
        </>);
};

export default LecturesGrid;