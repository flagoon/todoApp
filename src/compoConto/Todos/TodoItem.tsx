import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  todoId: number;
  isDone: boolean;
  className: string;
}

export const TodoItem = ({ todoId, children, className }: IProps) => {
  return (
    <li data-id={todoId} className={className}>
      {children}
    </li>
  );
};

export const StyledTodoItem = styled(TodoItem)`
  color: ${({ isDone }: IProps) => (isDone ? 'gray' : 'black')};
  text-decoration: ${({ isDone }: IProps) =>
    isDone ? 'line-through' : 'none'};
  list-style-type: none;
  transition: text-decoration 1s;
  display: inline;
`;
