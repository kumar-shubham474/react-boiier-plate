import React from 'react';

import './App.css';
import Layout from '../Layout/Layout';
import Date from '../Date/Date';
import Time from '../Time/Time';

function App() {
  return (
    <div className="calendar">
      <Date />
      <div className="main-body">
        <Time />
        <Layout />
      </div>
    </div>
  );
}

export default App;
