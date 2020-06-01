import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #2591ED;
  color: #FFFFFF;
  font-size: 8px;
  padding: 4px;
  height: 11px;
  cursor: pointer;
`;

const TimeText = styled.span`
  font-weight: bold;
`;

export const Event = ({
  time,
  title = '(Нет заголовка)',
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick}>
      <TimeText>{time}</TimeText>{" "}
      <span>{title}</span>
    </Wrapper>
  )
}
