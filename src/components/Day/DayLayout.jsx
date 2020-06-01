import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 85px;
  flex: 1;
  background: ${props => props.isCurrentDay ? '#E0F1FF' : '#FFFFFF'};
  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  opacity: ${props => props.isInCurrentPeriod ? '1' : '0.4'};
  display: flex;
  flex-direction: column;
`;

const DayNumberWrapper = styled.div`
  padding-right: 5px;
  padding-top: 5px;
  margin-left: auto;
`;

const EventsWrapper = styled.div`
  margin-top: 8px;
  margin-bottom: 20px;
`;

export const DayLayout = ({
  isCurrentDay,
  isInCurrentPeriod,
  dayNumber,
  onClick,
  events,
}) => {
  return (
    <Wrapper
      isInCurrentPeriod={isInCurrentPeriod}
      isCurrentDay={isCurrentDay}
      onClick={onClick}
    >
      <DayNumberWrapper>{dayNumber}</DayNumberWrapper>
      <EventsWrapper>{events}</EventsWrapper>
    </Wrapper>
  );
}
