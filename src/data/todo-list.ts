export interface ITodoItem {
  id: number;
  todo: string;
  isDone: boolean;
}

export const todoList: ITodoItem[] = [
  {
    id: 1,
    todo: 'Walk the dog',
    isDone: false,
  },
  {
    id: 2,
    todo: 'Make todo app',
    isDone: false,
  },
  {
    id: 3,
    todo: 'Learn react',
    isDone: false,
  },
  {
    id: 4,
    todo: 'Be a nice guy',
    isDone: true,
  },
];
