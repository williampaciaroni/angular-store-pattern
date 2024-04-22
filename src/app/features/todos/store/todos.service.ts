import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  selectLoadTodoItemsLoaded,
  selectLoadTodoItemsLoading,
  selectTodoItems,
} from './todos.selectors';
import { filter, mergeMap, tap } from 'rxjs';
import * as TodoActions from './todos.actions';
import { TodoModel } from './todos.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  readonly loadTodoItemsLoaded$ = this.store.pipe(
    select(selectLoadTodoItemsLoaded)
  );
  readonly loadTodoItemsLoading$ = this.store.pipe(
    select(selectLoadTodoItemsLoading)
  );
  readonly todoItems$ = this.store.pipe(select(selectTodoItems));

  constructor(private store: Store) {}

  public loadTodoItems() {
    return this.store.pipe(select(selectLoadTodoItemsLoading)).pipe(
      filter((loading) => {
        return !loading;
      }),
      mergeMap(() => this.loadTodoItemsLoaded$),
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(TodoActions.loadTodoItems());
        }
      }),
      mergeMap(() => this.todoItems$)
    );
  }

  public addItem(item: TodoModel) {
    this.store.dispatch(TodoActions.addTodoItem({ item: item }));
  }

  public removeItem(item: TodoModel) {
    this.store.dispatch(TodoActions.removeTodoItem({ item: item }));
  }
}
