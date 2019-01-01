import * as React from 'react';
import { todoList } from '../data/todo-list';
import InputContainer from './Input/InputContainer';
import { TodoList } from './Todos/TodoContainer';
import styled from 'styled-components';

class App extends React.Component {
  public state = {
    todoList,
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
        <TodoList todoList={this.state.todoList} />
      </MainAppArea>
    );
  }
}

const MainAppArea = styled.div`
  width: 540px;
  height: 450px;
  border: 1px solid green;
  margin: 40px auto;
  padding: 20px;
`;

export default App;
