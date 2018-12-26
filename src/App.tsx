import React, { Component } from 'react';
import styled from 'styled-components';
import { ITodoItem, todoList } from './data/todo-list';
import { StyledTodoItem as TodoItem } from './TodoItem';
import TodoAddInput from './TodoAddInput';

interface IState {
  todoList: ITodoItem[];
  value: string;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todoList,
      value: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  private calculateKey(): number {
    const { todoList } = this.state;
    const lastItemIndex = todoList.length - 1;
    return todoList[lastItemIndex].todoID + 1;
  }

  public onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const calculatedKey = this.calculateKey();
    const newTodoItem = {
      todoID: calculatedKey,
      isDone: false,
      name: this.state.value,
    };
    this.setState({
      todoList: [...this.state.todoList, newTodoItem],
      value: '',
    });
  };

  public onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ value: e.currentTarget.value });
  };

  public onClickHandler = (id: number) => {
    console.log('id');
  };

  public render() {
    const { todoList: todos } = this.state;
    return (
      <MainContainer>
        <TodoAddInput
          onSubmit={this.onSubmit}
          value={this.state.value}
          onChange={this.onChangeHandler}
        />
        <TodoContainer>
          {todos.map(({ className, todoID, isDone, name }: ITodoItem) => (
            <TodoItem
              className={className}
              key={todoID}
              todoID={todoID}
              isDone={isDone}
              name={name}
              onClickHandler={this.onClickHandler}
            />
          ))}
        </TodoContainer>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  margin: 1rem auto;
  border: 1px solid gray;
  padding: 1rem;
  width: 500px;
  height: 1000px;
`;

const TodoContainer = styled.ul`
  margin: 1rem;
  padding: 0;
`;

export default App;
