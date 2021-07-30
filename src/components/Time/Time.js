import moment from 'moment';
import React from 'react';
import './Time.css';

const Time = () => {
  const day = moment().startOf('hour');
  let range = [];
  for (let i = 9; i < 22; i++) {
    range.push(i);
  }

  const renderTime = timeRange => {
    return timeRange.map(hour => {
      return (
        <div key={hour} className="time-range">
          {day.hour(hour).format('h A')}
        </div>
      );
    });
  };
  return <div>{renderTime(range)}</div>;
};

export default Time;
