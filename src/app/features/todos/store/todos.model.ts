export const FEATURE_NAME = 'todos';

export interface TodoState {
  todoItems: TodoModel[];
  loadTodoItemsLoading?: boolean;
  loadTodoItemsLoaded?: boolean;
  loadTodoItemsError?: Error;
}

export interface TodoModel {
  id: string;
}
