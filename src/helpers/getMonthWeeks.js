import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  lastDayOfWeek,
  eachWeekOfInterval,
} from 'date-fns';

export const getMonthWeeks = (date) => {
  const monthFirstDate = startOfMonth(date)
  const monthLastDate = endOfMonth(date)
  return eachWeekOfInterval({
    start: startOfWeek(monthFirstDate),
    end: lastDayOfWeek(monthLastDate),
  })
}
