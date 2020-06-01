import {
  lastDayOfWeek,
  eachDayOfInterval,
} from 'date-fns';

export const getWeekDays = (weekStartDay) => {
  return eachDayOfInterval({
    start: weekStartDay,
    end: lastDayOfWeek(weekStartDay),
  })
}
