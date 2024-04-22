import { createAction, props } from '@ngrx/store';
import { TodoModel } from './todos.model';

export const loadTodoItems = createAction('[Todo] load');
export const loadTodoItemsSuccess = createAction(
  '[Todo] load/success',
  props<{ items: TodoModel[] }>()
);
export const loadTodoItemsError = createAction(
  '[Todo] load/error',
  props<{ error: Error }>()
);

export const addTodoItem = createAction(
  '[Todo] add',
  props<{ item: TodoModel }>()
);

export const removeTodoItem = createAction(
  '[Todo] remove',
  props<{ item: TodoModel }>()
);
