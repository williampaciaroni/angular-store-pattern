import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TodoActions from './todos.actions';
import { of } from 'rxjs';
import { TodosDataService } from './todos-data.service';
import { TodoModel } from './todos.model';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private todosDataService: TodosDataService
  ) {}

  loadTodoItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodoItems),
      mergeMap(() => {
        return this.todosDataService.loadItems().pipe(
          map((todoItemsResult: TodoModel[]) =>
            TodoActions.loadTodoItemsSuccess({
              items: todoItemsResult,
            })
          ),
          catchError((error: Error) =>
            of(TodoActions.loadTodoItemsError({ error: error }))
          )
        );
      })
    )
  );

  addTodoItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.addTodoItem),
        mergeMap((params: { item: TodoModel }) => {
          return this.todosDataService.addItem(params.item);
        })
      ),
    { dispatch: false }
  );

  removeTodoItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.removeTodoItem),
        mergeMap((params: { item: TodoModel }) => {
          return this.todosDataService.removeItem(params.item);
        })
      ),
    { dispatch: false }
  );
}
