import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_NAME, TodoState } from './todos.model';

export const selectTodoState = createFeatureSelector<TodoState>(FEATURE_NAME);

export const selectLoadTodoItemsLoading = createSelector(
  selectTodoState,
  (state) => state.loadTodoItemsLoading
);
export const selectLoadTodoItemsLoaded = createSelector(
  selectTodoState,
  (state) => state.loadTodoItemsLoaded
);
export const selectLoadTodoItemsError = createSelector(
  selectTodoState,
  (state) => state.loadTodoItemsError
);
export const selectTodoItems = createSelector(
  selectTodoState,
  (state) => state.todoItems
);
