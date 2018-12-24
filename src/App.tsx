import React, { Component } from 'react';
import styled from 'styled-components';
import { ITodoItem, todoList } from './data/todo-list';

interface IState {
  todoList: ITodoItem[];
}

interface ITodoComponent {
  children: string;
  key: number;
  isDone: boolean;
}
class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todoList,
    };
  }

  public render() {
    const { todoList: todos } = this.state;
    return (
      <MainContainer>
        <TodoContainer>
          {todos.map((todosz: ITodoItem) => (
            <TodoItem key={todosz.id} isDone={todosz.isDone}>
              {todosz.todo}
            </TodoItem>
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
  border: 1px solid green;
  padding: 0;
`;

const TodoItem: any = styled.li`
  color: ${(props: ITodoItem) => (props.isDone ? 'gray' : 'black')};
  text-decoration: ${(props: ITodoItem) =>
    props.isDone ? 'line-through' : 'none'};
  list-style-type: none;

  &:hover {
    background-color: yellow;
  }
`;

export default App;
