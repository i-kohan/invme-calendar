import React from 'react';
import { isSameDay } from 'date-fns';

import { DayLayout, DayNumber } from '../../components';
import { EventContainer } from '../Event';
import { EventsContext } from '../../context';

export const DayContainer = ({
  day,
  isInCurrentPeriod
}) => {
  const [newEvent, setNewEvent] = React.useState(null);
  const { getEventsByDate, saveEvent, editEvent, removeEvent } = React.useContext(EventsContext);

  const handleSaveEvent = React.useCallback(
    (eventProps) => {
      setNewEvent(null)
      saveEvent({ date: day, ...eventProps })
    },
    [day, saveEvent]
  )

  const handleEditEvent = React.useCallback(
    (eventProps, id) => editEvent({ date: day, id, eventProps }),
    [day, editEvent]
  )

  const handleRemoveEvent = React.useCallback(
    (id) => removeEvent({ date: day, id }),
    [day, removeEvent]
  )

  const handleOutsideClick = React.useCallback(
    () => setNewEvent(null),
    [],
  )

  const handleDayClick = React.useCallback(
    () => {
      if (isInCurrentPeriod) {
        setNewEvent({ isNewEvent: true })
      }
    },
    [isInCurrentPeriod],
  )

  const isCurrentDay = isSameDay(new Date(), day)

  const todayEvents = getEventsByDate(day);
  todayEvents.sort((a, b) => a.time && a.time.localeCompare(b.time));

  const events = newEvent ? [...todayEvents, newEvent] : todayEvents;

  return (
    <DayLayout
      onClick={handleDayClick}
      isCurrentDay={isCurrentDay}
      isInCurrentPeriod={isInCurrentPeriod} 
      dayNumber={<DayNumber dayNumber={day.getDate()} isCurrentDay={isCurrentDay} />}
      events={
        events.map((e, i) => <EventContainer
          key={e.id || i}
          id={e.id}
          isNewEvent={e.isNewEvent}
          title={e.title}
          time={e.time}
          description={e.description}
          onOutsideClick={handleOutsideClick}
          onSaveEvent={handleSaveEvent}
          onRemoveEvent={handleRemoveEvent}
          onEditEvent={handleEditEvent}
        />)
      }
    />
  )
}
