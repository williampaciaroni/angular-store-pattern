import * as TodoActions from './todos.actions';
import produce from 'immer';
import { Action, createReducer, on } from '@ngrx/store';
import { TodoState } from './todos.model';

export const initialState: TodoState = {
  // loadTodoItems
  todoItems: [],
  loadTodoItemsLoading: false,
  loadTodoItemsLoaded: undefined,
  loadTodoItemsError: undefined,
};

const reducer = createReducer(
  initialState,
  // loadTodoItems
  on(
    TodoActions.loadTodoItems,
    produce((state: TodoState) => {
      state.loadTodoItemsLoading = true;
      state.loadTodoItemsLoaded = undefined;
      state.loadTodoItemsError = undefined;
    })
  ),
  on(
    TodoActions.loadTodoItemsSuccess,
    produce((state: TodoState, { items }) => {
      state.loadTodoItemsLoading = false;
      state.loadTodoItemsLoaded = true;
      state.loadTodoItemsError = undefined;
      state.todoItems = items;
    })
  ),
  on(
    TodoActions.loadTodoItemsError,
    produce((state, { error }) => {
      state.loadTodoItemsLoading = false;
      state.loadTodoItemsLoaded = false;
      state.loadTodoItemsError = error;
    })
  ),
  // addTodoItem
  on(
    TodoActions.addTodoItem,
    produce((state, { item }) => {
      if (!state.todoItems.some((i) => i.id == item.id))
        state.todoItems.push(item);
    })
  ),
  // removeTodoItem
  on(
    TodoActions.removeTodoItem,
    produce((state, { item }) => {
      if (state.todoItems.some((i) => i.id == item.id)) {
        state.todoItems.splice(
          state.todoItems.findIndex((i) => i.id == item.id),
          1
        );
      }
    })
  )
);

export const todoItemsReducer = (
  state: TodoState | undefined,
  action: Action
) => {
  return reducer(state, action);
};
