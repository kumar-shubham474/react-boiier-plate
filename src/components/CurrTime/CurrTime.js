import React from 'react';

const CurrTime = props => {
  let styles = {
    height: '2px',
    width: '100%',
    background: 'red',
    top: `${props.top}px`,
    position: 'absolute',
  };
  return <div style={styles}></div>;
};

export default CurrTime;
