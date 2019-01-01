import * as React from 'react';
import { ITodoItem } from '../../data/todo-list';
import { StyledTodoItem } from './TodoItem';
import styled from 'styled-components';
import { StyledDisableButton } from './DisableButton';

interface IProps {
  todoList: ITodoItem[];
}

const onClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
  e.preventDefault();
  console.log(id);
};

export const TodoList = ({ todoList }: IProps) => {
  return (
    <TodoListArea>
      {todoList.map((el: ITodoItem, index: number) => {
        return (
          <TodoItemArea key={index}>
            <StyledTodoItem
              todoId={index}
              isDone={el.isDone}
              className="todoItem"
            >
              {el.name}
            </StyledTodoItem>
            <StyledDisableButton
              className="styledDisableButton"
              onClick={onClick}
              todoId={index}
            />
          </TodoItemArea>
        );
      })}
    </TodoListArea>
  );
};

const TodoListArea = styled.ul`
  list-style-position: outside;
  list-style-type: none;
  padding: 0;
  user-select: none;
`;

const TodoItemArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 1rem 0;
`;
