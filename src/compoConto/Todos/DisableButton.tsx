import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  className: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>, id: number) => void;
  todoId: number;
}

export const DisableButton = ({ className, onClick, todoId }: IProps) => {
  return (
    <div className={className} onClick={e => onClick(e, todoId)}>
      🗑
    </div>
  );
};

export const StyledDisableButton = styled(DisableButton)`
  margin-right: 0.5rem;
  cursor: pointer;
`;
