import React, { Component } from 'react';
import styled from 'styled-components';
import { ITodoItem, todoList } from './data/todo-list';
import { StyledTodoItem as TodoItem } from './TodoItem';
import TodoAddInput from './TodoAddInput';
import { StyledDisableButton as DisableButton } from './DisableButton';

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
  }

  public onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const newTodoItem = {
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

  private extractTodoItem = (id: number): ITodoItem => {
    return this.state.todoList[id];
  };

  public onClickHandler = (id: number): void => {
    const todoItem = this.extractTodoItem(id);
    todoItem.isDone = !todoItem.isDone;
    const { todoList: statedItemsList } = this.state;
    const removedOldListItem = statedItemsList.splice(id, 1, todoItem);
    this.setState({ todoList: statedItemsList });
  };

  private onDeleteItem = (id: number): void => {
    const { todoList: todos } = this.state;
    const arrayAfterRemove = todos.splice(id, 1);
    this.setState({ todoList: todos });
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
          {todos.map(({ isDone, name }: ITodoItem, index) => (
            <TodoItemContainer key={index}>
              <TodoItem
                className={name}
                todoID={index}
                isDone={isDone}
                name={name}
                onClickHandler={this.onClickHandler}
              />
              <DisableButton
                className={name}
                onDeleteItem={this.onDeleteItem}
                itemID={index}
              />
            </TodoItemContainer>
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

const TodoItemContainer = styled.div`
  width: 300px;
  display: flex;
  margin-bottom: 2px;
`;

export default App;
