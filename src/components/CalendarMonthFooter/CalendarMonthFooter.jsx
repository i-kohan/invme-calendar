import React from 'react';
import styled from 'styled-components';

const Footer = styled.div``;

const EventsText = styled.span`
  font-size: 12px;
  line-height: 15px;

  color: #B0AFAF;
`;

const RemoveText = styled.span`
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;

  color: #2591ED;;
`;

export const CalendarMonthFooter = ({
  eventsNumber,
  month,
  onRemove
}) => {
  return (
    <Footer>
      <EventsText>{eventsNumber} events on {month} -</EventsText>{" "}
      <RemoveText onClick={onRemove}>Remove All</RemoveText>
    </Footer>
  );
}
