import * as React from 'react';
import styled from 'styled-components';
import { ITodoItem } from './data/todo-list';

const TodoItem = ({ className, name, todoID, onClickHandler }: ITodoItem) => (
  <li className={className} onClick={() => onClickHandler(todoID)}>
    {name}
  </li>
);

const StyledTodoItem = styled(TodoItem)`
  color: ${({ isDone }: ITodoItem) => (isDone ? 'gray' : 'black')};
  text-decoration: ${({ isDone }: ITodoItem) =>
    isDone ? 'line-through' : 'none'};
  list-style-type: none;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export { StyledTodoItem };
