export interface ITodoItem {
  key: number;
  name: string;
  isDone: boolean;
  className?: string;
}

export const todoList: ITodoItem[] = [
  {
    key: 1,
    name: 'Walk the dog',
    isDone: false,
  },
  {
    key: 2,
    name: 'Make todo app',
    isDone: false,
  },
  {
    key: 3,
    name: 'Learn react',
    isDone: false,
  },
  {
    key: 4,
    name: 'Be a nice guy',
    isDone: true,
  },
];
