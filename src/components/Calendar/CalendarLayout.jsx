import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
`;

const FooterWrapper = styled.div`
  margin-top: 20px;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CalendarLayout = ({
  calendarHeader,
  calendarPage,
  calendarFooter,
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        {calendarHeader}
      </HeaderWrapper>
      {calendarPage}
      <FooterWrapper>
        {calendarFooter}
      </FooterWrapper>
    </Wrapper>
  )
} 
