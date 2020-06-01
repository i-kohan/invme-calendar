import React from 'react';
import styled from 'styled-components';

import { Event, EventPopup } from '../../components';

const Wrapper = styled.div`
  position: relative;
`;

export const EventContainer = ({
  isNewEvent,
  id,
  time,
  title,
  description,
  onOutsideClick,
  onSaveEvent,
  onEditEvent,
  onRemoveEvent,
}) => {
  const [eventProps, setEventProps] = React.useState({ time, title, description });
  const [isPopupVisible, setPopupVisible] = React.useState(false);

  const handleSaveEvent = React.useCallback(
    () => onSaveEvent(eventProps),
    [eventProps, onSaveEvent]
  )

  const handleEditEvent = React.useCallback(
    () => {
      setPopupVisible(false);
      onEditEvent(eventProps, id)
    },
    [eventProps, id, onEditEvent]
  )

  const handleRemoveEvent = React.useCallback(
    () => {
      setPopupVisible(false);
      onRemoveEvent(id)
    },
    [onRemoveEvent, id]
  )

  const handleEventPropsChange = React.useCallback(
    ({ currentTarget }) => setEventProps({ ...eventProps, [currentTarget.name]: currentTarget.value }),
    [eventProps],
  )

  const handleOpenPopup = React.useCallback(
    (e) => {
      e.stopPropagation();
      setPopupVisible(true)
    },
    [],
  );

  const handleOutsideClick = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (id) {
        setPopupVisible(false);
      } else {
        onOutsideClick()
      }
    },
    [onOutsideClick, id],
  )

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Event time={time} title={title} onClick={handleOpenPopup} />
      {(isPopupVisible || isNewEvent) && <EventPopup
        onSave={id ? handleEditEvent : handleSaveEvent}
        isRemovable={!!id}
        onRemove={handleRemoveEvent}
        eventProps={eventProps}
        onChange={handleEventPropsChange}
        onOutsideClick={handleOutsideClick}
      />}
    </Wrapper>
  )
}
