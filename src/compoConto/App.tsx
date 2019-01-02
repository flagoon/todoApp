import * as React from 'react';
import { todoList } from '../data/todo-list';
import InputContainer from './Input/InputContainer';
import { TodoList } from './Todos/TodoContainer';
import styled from 'styled-components';

class App extends React.Component {
  public state = {
    todoList,
  };

  public onTrashClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    e.preventDefault();
    const { todoList: todos } = this.state;
    const garbage = todos.splice(id, 1);
    this.setState({ todoList: todos });
  };

  public onNameClickHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    id: number
  ) => {
    e.preventDefault();
    const { todoList: todos } = this.state;
    const todoToChange = todos[id];
    todoToChange.isDone = !todoToChange.isDone;
    const removedOldListItem = todos.splice(id, 1, todoToChange);
    this.setState({ todoList: todos });
  };

  public onSubmit = (
    e: React.FormEvent,
    todoItem: string,
    resetInputValue: () => void
  ): void => {
    e.preventDefault();
    const newItem = {
      name: todoItem,
      isDone: false,
    };
    resetInputValue();
    this.setState({ todoList: [...this.state.todoList, newItem] });
  };

  public render() {
    return (
      <MainAppArea>
        <InputContainer onSubmit={this.onSubmit} />
        <TodoList
          onTrashClickHandler={this.onTrashClickHandler}
          onNameClickHandler={this.onNameClickHandler}
          todoList={this.state.todoList}
        />
      </MainAppArea>
    );
  }
}

const MainAppArea = styled.div`
  width: 540px;
  min-height: 450px;
  border: 1px solid green;
  margin: 40px auto;
  padding: 20px;
`;

export default App;
