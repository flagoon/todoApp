import * as React from 'react';
import styled from 'styled-components';
import { ITodoItem } from './data/todo-list';

interface IListItem {
  className: string;
  name: string;
  todoID: number;
  onClickHandler: (id: number) => void;
}

const TodoItem = ({ className, name, todoID, onClickHandler }: IListItem) => (
  <li className={className} onClick={() => onClickHandler(todoID)}>
    {name}
  </li>
);

const StyledTodoItem = styled(TodoItem)`
  color: ${({ isDone }: ITodoItem) => (isDone ? 'gray' : 'black')};
  text-decoration: ${({ isDone }: ITodoItem) =>
    isDone ? 'line-through' : 'none'};
  list-style-type: none;
  user-select: none;
  display: inline;
  transition: text-decoration 1s;

  & + button {
    margin: 0 0 0 1rem;
  }

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export { StyledTodoItem };
