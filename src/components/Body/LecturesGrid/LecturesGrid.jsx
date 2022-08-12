import React from 'react';
import './LecturesGrid.scss';

const LecturesGrid = ({date, title, type}) => {
    const dates = new Date(date)
    const arrayMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',];
    return (
        <div className="lecturesGrid">
            <div>
                <div>
                    <h3>{dates.getDate()}{arrayMonth[dates.getMonth()].slice(0, 3)}</h3>
                    <p>{dates.toLocaleTimeString().slice(0, -3)}</p>
                </div>
                <div>
                    {title}
                </div>
                <p>{type}</p>
            </div>
            <button type="button">
                View more
            </button>
        </div>
    );
};

export default LecturesGrid;