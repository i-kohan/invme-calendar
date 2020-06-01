import React from 'react';

import { CalendarLayout } from '../../components';
import { CalendarMonthContentContainer } from '../CalendarMonthContent';
import { CalendarMonthFooterContainer } from '../CalendarMonthFooter';
import { CalendarMonthHeaderContainer } from '../CalendarMonthHeader';

export const CalendarContainer = () => {
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = React.useCallback(
    (date) => setDate(date),
    [],
  );

  return (
    <CalendarLayout
      calendarHeader={<CalendarMonthHeaderContainer date={date} onChange={handleDateChange} />}
      calendarPage={<CalendarMonthContentContainer date={date} />}
      calendarFooter={<CalendarMonthFooterContainer date={date} />}
    />
  )
}
