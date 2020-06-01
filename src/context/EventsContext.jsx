import React from 'react';
import { format } from 'date-fns';

export const EventsContext = React.createContext();

export const EventsProvider = (props) => {
  const [events, setEvents] = React.useState({});

  React.useEffect(
    () => {
      const storageEvents = Object.entries(localStorage).reduce((acc, [key, val]) => {
        acc[key] = JSON.parse(val);

        return acc;
      }, {});
      setEvents(storageEvents);
    },
    [setEvents],
  );

  const getKey = (date) => format(date, 'MM/dd/yyyy');

  const saveEvent = ({ date, title, description, time}) => {
    const key = getKey(date);
    const id = Math.round(Math.random() * 2**53 - 1);
    const existingEvents = getEventsByDate(date);
    const newEvent = { title, description, time, id };

    localStorage.setItem(key, JSON.stringify([...existingEvents, newEvent]));
    setEvents({ ...events, [key]: [...existingEvents, newEvent] });
  }

  const getEventsByDate = (date) => {
    const key = getKey(date);

    return events[key] || [];
  }

  const editEvent = ({ date, id, eventProps }) => {
    const key = getKey(date);
    const storageEvents = JSON.parse(localStorage.getItem(getKey(date)));
    const editedEvents = storageEvents.map(e => e.id === id ? {
      id,
      ...eventProps,
    } : e);
    localStorage.setItem(key, JSON.stringify(editedEvents));

    setEvents({ ...events, [key]: editedEvents });
  }

  const removeEvent = ({ date, id }) => {
    const key = getKey(date);
    const storageEvents = JSON.parse(localStorage.getItem(getKey(date)));
    const editedEvents = storageEvents.filter(e => e.id !== id)
    localStorage.setItem(key, JSON.stringify(editedEvents));

    setEvents({ ...events, [key]: editedEvents });
  }

  const removeDay = ({ date }) => {
    const key = getKey(date);
    localStorage.removeItem(key);

    setEvents((events) => ({ ...events, [key]: [] }));
  }

  return (
    <EventsContext.Provider value={{ getEventsByDate, saveEvent, editEvent, removeEvent, removeDay }}>
      {props.children}
    </EventsContext.Provider>
  )
}
