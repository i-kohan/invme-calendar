import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from 'date-fns';

export const getMonthDays = (date) => {
  const monthFirstDate = startOfMonth(date)
  const monthLastDate = endOfMonth(date)
  return eachDayOfInterval({
    start: monthFirstDate,
    end: monthLastDate,
  })
}
