import React, { useEffect, useState } from 'react';
import './Layout.css';
import Event from '../Event/Event';
import { prepareDetailedEvents } from '../../others/helper';
import axios from '../../others/axios';
import requests from '../../others/requests';
import moment from 'moment';
import CurrTime from '../CurrTime/CurrTime';

let overlapping = [
  {
    title: 'A',
    start: '0945',
    end: '1715',
  },
  // {
  //   title: "B",
  //   start: "1000",
  //   end: "1100",

  // },
  {
    title: 'C',
    start: '1030',
    end: '1130',
  },

  {
    title: 'D',
    start: '1030',
    end: '2030',
  },

  {
    title: 'E',
    start: '1330',
    end: '1430',
  },
  {
    title: 'f',
    start: '1230',
    end: '1430',
  },
];

let value = [
  {
    title: 'A',
    start: '0945',
    end: '1115',
  },
  {
    title: 'B',
    start: '1810',
    end: '1900',
  },
  {
    title: 'C',
    start: '1830',
    end: '1930',
  },
  {
    title: 'D',
    start: '1905',
    end: '2005',
  },
  {
    title: 'E',
    start: '1045',
    end: '1130',
  },
  {
    title: 'F',
    start: '1815',
    end: '2030',
  },
  {
    title: 'g',
    start: '1050',
    end: '1140',
  },
  {
    title: 'h',
    start: '0900',
    end: '2100',
  },
];

let spaceProblem = [
  {
    title: 'A',
    start: '0945',
    end: '1715',
  },
  {
    title: 'B',
    start: '1000',
    end: '1100',
  },
  {
    title: 'C',
    start: '1030',
    end: '1130',
  },

  {
    title: 'D',
    start: '1030',
    end: '2030',
  },

  {
    title: 'E',
    start: '1330',
    end: '1430',
  },
  // {
  // title: "f",
  // start: "1230",
  // end: "1430",

  // },
];

const renderEvents = eventList => {
  let ind = -1;

  return eventList.map(ev => {
    ind++;
    return (
      <Event
        data-testid="calendar-event"
        key={ind}
        title={ev.title}
        top={ev.top}
        bottom={ev.bottom}
        color={ev.color}
        height={ev.height}
        width={ev.width}
        left={ev.left}
        start={ev.start}
        end={ev.end}
      />
    );
  });
};

const Layout = () => {
  const [events, setEvents] = useState([]);
  const [currTime, setCurrTime] = useState('');
  const [currTimePosition, setCurrTimePosition] = useState('');

  useEffect(() => {
    setInterval(() => {
      setCurrTime(moment().format('HHmm'));
    });
  }, []);

  useEffect(() => {
    let position = (currTime.substring(0, 2) - 9) * 60 + +currTime.substring(2);
    setCurrTimePosition(position);
  }, [currTime]);

  useEffect(() => {
    //TODO: check why arrow function is showing error here (fetchEvents)
    async function fetchEvents() {
      let request;

      try {
        request = await axios.get(requests.testEvents);
        console.log(request);
        let data = request.data;
        setEvents(prepareDetailedEvents(data));
      } catch (e) {
        console.log(e);
      }
      return request;
    }

    fetchEvents();
  }, []);

  return (
    <div className="calendar-body">
      {renderEvents(events)}
      <CurrTime top={currTimePosition} />
    </div>
  );
};

export default Layout;
