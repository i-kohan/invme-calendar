import React from 'react';
import styled from 'styled-components';

const WeekDayName = styled.div`
  flex: 1;
  text-align: right;
`;

export const WeekDaysNames = ({ weekDays }) => {
  return weekDays.map(dayName => <WeekDayName key={dayName}>{dayName}</WeekDayName>);
}
