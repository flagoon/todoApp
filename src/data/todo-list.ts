export interface ITodoItem {
  name: string;
  isDone: boolean;
}

export const todoList: ITodoItem[] = [
  {
    name: 'Walk the dog',
    isDone: false,
  },
  {
    name: 'Make todo app',
    isDone: false,
  },
  {
    name: 'Learn react',
    isDone: false,
  },
  {
    name: 'Be a nice guy',
    isDone: true,
  },
];
