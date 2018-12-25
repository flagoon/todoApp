import * as React from 'react';
import styled from 'styled-components';
import { ITodoItem } from './data/todo-list';

const TodoItem = ({ className, name }: ITodoItem) => (
  <li className={className}>{name}</li>
);

const StyledTodoItem = styled(TodoItem)`
  color: ${(props: ITodoItem) => (props.isDone ? 'gray' : 'black')};
  text-decoration: ${(props: ITodoItem) =>
    props.isDone ? 'line-through' : 'none'};
  list-style-type: none;

  &:hover {
    background-color: yellow;
    cursor: pointer;
  }
`;

export { StyledTodoItem };
