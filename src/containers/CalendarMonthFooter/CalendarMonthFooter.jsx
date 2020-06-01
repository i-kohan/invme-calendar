import React from 'react';
import { format } from 'date-fns';

import { CalendarMonthFooter } from '../../components';
import { EventsContext } from '../../context';
import { getMonthDays } from '../../helpers';

export const CalendarMonthFooterContainer = ({ date }) => {
  const { getEventsByDate, removeDay } = React.useContext(EventsContext);
  const monthDays = getMonthDays(date);

  const monthEventsNumber = monthDays.reduce((acc, cur) => {
    const dayEvents = getEventsByDate(cur);
    
    return dayEvents ? acc += dayEvents.length : acc
   }, 0)

   const handleRemove = React.useCallback(
     () => monthDays.forEach(day => removeDay({ date: day })),
     [monthDays, removeDay],
   )

  return (
    <CalendarMonthFooter
      month={format(date, 'MMMM yyyy')}
      eventsNumber={monthEventsNumber}
      onRemove={handleRemove}
    />
  )
}
