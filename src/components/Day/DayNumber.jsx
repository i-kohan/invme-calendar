import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  font-size: 11px;
  border-radius: 50%;
  background-color: ${props => props.isCurrentDay ? '#2591ED' : ''};
  color: ${props => props.isCurrentDay ? '#FFFFFF' : '#6E6E6E'};
  width: 12px;
  height: 12px;
`;

export const DayNumber = ({
  dayNumber,
  isCurrentDay,
}) => {
  return (
    <Wrapper isCurrentDay={isCurrentDay}>{dayNumber}</Wrapper>
  )
}
