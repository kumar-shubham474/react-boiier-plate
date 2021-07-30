const convertTimeToPixels = time => {
  let hour = time.substring(0, 2);
  let min = time.substring(2);

  let pixel = 0;
  pixel += (+hour - 9) * 60 + +min;

  return pixel;
};

const convertTimeFormat = time => {
  // let day = moment().startOf('hour')
  let isAM = time.substring(0, 2) < 12;

  let hour =
    time.substring(0, 2) <= 12
      ? time.substring(0, 2)
      : (time.substring(0, 2) % 13) + 1;

  return `${hour}:${time.substring(2)}${isAM ? 'AM' : 'PM'}`;
};

//original
const modifyEvents = eventList => {
  return eventList.map((ev, index) => {
    return {
      title: `${ev.title}`,
      start: `${convertTimeFormat(ev.start)}`,
      end: `${convertTimeFormat(ev.end)}`,
      top: `${convertTimeToPixels(ev.start)}`,
      bottom: `${convertTimeToPixels(ev.end)}`,
      height: `${convertTimeToPixels(ev.end) - convertTimeToPixels(ev.start)}`,
      color: `${ev.color}`,
      maxConcurrentAppointment: 1,
    };
  });
};

//original
export const prepareDetailedEvents = eventList => {
  let events = modifyEvents(eventList);
  let arr = [],
    occupied = [];

  for (let i = 0; i < events.length; i++) {
    arr.push([events[i].top, 0, i]);
    arr.push([events[i].bottom, 1, i]);
    occupied.push(0);
  }

  let map = new Map();
  arr.sort(function (a, b) {
    return a[0] - b[0];
  });

  let current = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === 0) {
      current.push(arr[i][2]);

      for (let j = 0; j < occupied.length; j++) {
        if (occupied[j] === 0) {
          events[arr[i][2]].position = j;
          occupied[j] = 1;
          map.set(arr[i][2], j);
          break;
        }
      }
    } else if (arr[i][1] === 1) {
      let ind = current.indexOf(arr[i][2]);

      if (ind !== -1) current.splice(ind, 1);

      occupied[map.get(arr[i][2])] = 0;
    }
    for (let j = 0; j < current.length; j++) {
      events[current[j]].maxConcurrentAppointment = Math.max(
        events[current[j]].maxConcurrentAppointment,
        current.length,
      );
    }
  }
  for (let i = 0; i < events.length; i++) {
    events[i].width = 600 / events[i].maxConcurrentAppointment;
    events[i].left = events[i].position * events[i].width;
  }

  return events;
};
