export interface ITodoItem {
  todoID: number;
  name: string;
  isDone: boolean;
  className?: string;
  onClickHandler?: (todoID: number) => any;
}

export const todoList: ITodoItem[] = [
  {
    todoID: 1,
    name: 'Walk the dog',
    isDone: false,
  },
  {
    todoID: 2,
    name: 'Make todo app',
    isDone: false,
  },
  {
    todoID: 3,
    name: 'Learn react',
    isDone: false,
  },
  {
    todoID: 4,
    name: 'Be a nice guy',
    isDone: true,
  },
];
