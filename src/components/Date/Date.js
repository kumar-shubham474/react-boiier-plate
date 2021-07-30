import moment from 'moment';
import React from 'react';

import './Date.css';

const Date = () => {
  let today = moment().format('ddd, MMM DD');
  return (
    <div>
      <p>{today}</p>
    </div>
  );
};

export default Date;
