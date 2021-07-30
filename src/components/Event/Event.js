import React from 'react';
import './Event.css';

const Event = props => {
  let divStyle = {
    position: 'absolute',
    top: `${props.top}px`,
    height: `${props.height}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    left: `${props.left}px`,
    width: `${props.width}px`,
  };
  return (
    <div className="event" style={divStyle}>
      <div className="event-title">
        <p>{props.title}</p>
      </div>

      <div className="duration">
        <p>
          {props.start} - {props.end}
        </p>
      </div>
    </div>
  );
};

export default Event;
