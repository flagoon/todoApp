import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  className: string;
  onTrashClickHandler: (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => void;
  todoId: number;
}

export const DisableButton = ({
  className,
  onTrashClickHandler,
  todoId,
}: IProps) => {
  return (
    <div className={className} onClick={e => onTrashClickHandler(e, todoId)}>
      🗑
    </div>
  );
};

export const StyledDisableButton = styled(DisableButton)`
  margin-right: 0.5rem;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: greenyellow;
    border-radius: 5px;
  }
`;
