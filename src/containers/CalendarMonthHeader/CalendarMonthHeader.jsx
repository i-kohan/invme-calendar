import React from 'react';
import { CalendarMonthHeader } from '../../components';
import { addMonths, subMonths, format } from 'date-fns';

export const CalendarMonthHeaderContainer = ({ date, onChange }) => {
  const handleNextMonth = React.useCallback(
    () => onChange(addMonths(date, 1)),
    [date, onChange],
  );

  const handlePrevMonth = React.useCallback(
    () => onChange(subMonths(date, 1)),
    [date, onChange],
  );

  const handleToday = React.useCallback(
    () => onChange(new Date()),
    [onChange],
  );

  return (
    <CalendarMonthHeader
      date={format(date, 'MMMM yyyy')}
      onPrevMonth={handlePrevMonth}
      onNextMonth={handleNextMonth}
      onToday={handleToday}
    />
  )
}
