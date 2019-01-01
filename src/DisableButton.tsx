import * as React from 'react';
import styled from 'styled-components';

interface IDisableButton {
  className: string;
  itemID: number;
  onDeleteItem: (id: number) => void;
}

export const DisableButton = ({
  className,
  onDeleteItem,
  itemID,
}: IDisableButton) => {
  return (
    <button className={className} onClick={() => onDeleteItem(itemID)}>
      X
    </button>
  );
};

export const StyledDisableButton = styled(DisableButton)`
  border: 0 solid;
  background-color: white;
  font-weight: bold;
  color: red;
  transition: background 0.4s;

  &:hover {
    cursor: pointer;
    background-color: pink;
  }
`;
