import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const DateText = styled.span`
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
`;

const LeftArrow = styled.i`
  cursor: pointer;
  margin-right: 5px;
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;

  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const RightArrow = styled.i`
  cursor: pointer;
  margin-left: 5px;
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;

  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const TodayText = styled.span`
  cursor: pointer;

  font-size: 11px;
  line-height: 13px;
`;



export const CalendarMonthHeader = ({ date, onPrevMonth, onNextMonth, onToday }) => {
  return (
    <Header>
      <DateText>{date.toUpperCase()}</DateText>
      <div>
        <LeftArrow onClick={onPrevMonth} />
        <TodayText onClick={onToday}>TODAY</TodayText>
        <RightArrow onClick={onNextMonth} />
      </div>
    </Header>
  );
}
