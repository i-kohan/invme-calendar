import React from 'react';
import { isSameMonth } from 'date-fns';

import { CalendarMonthContentLayout, WeekDaysNames } from '../../components';
import { WEEK_DAYS } from '../../constants';
import { getMonthWeeks, getWeekDays } from '../../helpers';
import { DayContainer } from '../Day';

export const CalendarMonthContentContainer = ({ date }) => {
  const weeks = getMonthWeeks(date);

  return (
    <CalendarMonthContentLayout
      weekDaysNames={<WeekDaysNames weekDays={WEEK_DAYS}/>}
      weeks={weeks.map(w =>
        getWeekDays(w).map(day => (
          <DayContainer key={day} day={day} isInCurrentPeriod={isSameMonth(date, day)} />
        )
      ))}
    />
  )
}
