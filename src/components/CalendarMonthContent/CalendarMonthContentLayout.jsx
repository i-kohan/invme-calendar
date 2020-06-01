import React from 'react';
import styled from 'styled-components';

const WeekDaysNamesWrapper = styled.div`
  display: flex;
  margin-bottom: 7px;
`;

const WeekDaysWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalendarMonthContentLayout = ({
  weekDaysNames,
  weeks,
}) => {
  return (
    <Wrapper>
      <WeekDaysNamesWrapper>
        {weekDaysNames}
      </WeekDaysNamesWrapper>
      {weeks.map((week, i) => (
        <WeekDaysWrapper key={i}>
          {week}
        </WeekDaysWrapper>
      ))}
    </Wrapper>
  )
}
