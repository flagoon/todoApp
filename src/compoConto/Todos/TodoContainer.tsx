import * as React from 'react';
import { ITodoItem } from '../../data/todo-list';
import { StyledTodoItem } from './TodoItem';
import styled from 'styled-components';
import { StyledDisableButton } from './DisableButton';

interface IProps {
  todoList: ITodoItem[];
  onTrashClickHandler: (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => void;
  onNameClickHandler: (e: React.MouseEvent<HTMLLIElement>, id: number) => void;
}

export const TodoList = ({
  todoList,
  onTrashClickHandler,
  onNameClickHandler,
}: IProps) => {
  return (
    <TodoListArea>
      {todoList.map((el: ITodoItem, index: number) => {
        return (
          <TodoItemArea key={index}>
            <StyledTodoItem
              todoId={index}
              isDone={el.isDone}
              className="todoItem"
              onNameClickHandler={onNameClickHandler}
            >
              {el.name}
            </StyledTodoItem>
            <StyledDisableButton
              className="styledDisableButton"
              onTrashClickHandler={onTrashClickHandler}
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
