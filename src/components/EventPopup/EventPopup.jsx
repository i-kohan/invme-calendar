import React from 'react';
import styled from 'styled-components';
import { Input } from '../Input';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button';

const Wrapper = styled.div`
  position: absolute;
  left: 90%;
  top: -20px;
  width: 130px;
  height: 130px;
  background: #FFFFFF;
  z-index: 1;

  box-shadow: 0px 6px 11px rgba(22, 97, 161, 0.11);
  border-radius: 10px;
  padding: 9px 8px;

  ::after {
    content: "";
    position: absolute;
    top: 24px;
    left: 0;
    margin-left: -5px;
    border-width: .4rem .4rem .4rem 0;
    border-style: solid;
    border-color: transparent white;
  }

  & > input, & > textarea {
    margin-top: 5px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
`;

export const EventPopup = ({
  onOutsideClick,
  eventProps,
  onChange,
  onSave,
  onRemove,
  isRemovable,
}) => {
  const ref = React.useRef();

  useOutsideClick(ref, onOutsideClick)

  return (
    <Wrapper ref={ref}>
      <Input value={eventProps.title} type="text" name="title" onChange={onChange} />
      <Input value={eventProps.time} type="time" name="time" onChange={onChange} />
      <Textarea value={eventProps.description} name="description" onChange={onChange} />
      <ButtonsWrapper>
        <Button onClick={onSave} color="#2591ED">Сохранить</Button>
        {isRemovable && <Button onClick={onRemove} color="#FF727A">Удалить</Button>}
      </ButtonsWrapper>
    </Wrapper>
  )
}
