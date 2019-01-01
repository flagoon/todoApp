import * as React from 'react';
import { ITodoItem } from '../../data/todo-list';

interface IProps {
  todoList: ITodoItem[];
}

export const TodoList = ({ todoList }: IProps) => {
  return (
    <>
      {todoList.map((el: ITodoItem, index: number) => {
        return <div key={index}>{el.name}</div>;
      })}
    </>
  );
};
