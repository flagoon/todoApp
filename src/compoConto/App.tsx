import * as React from 'react';
import { todoList } from '../data/todo-list';
import InputContainer from './Input/InputContainer';
import { TodoList } from './Todos/TodoContainer';

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
      <>
        <InputContainer onSubmit={this.onSubmit} />
        <TodoList todoList={this.state.todoList} />
      </>
    );
  }
}

export default App;
