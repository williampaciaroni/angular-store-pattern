import { Injectable } from '@angular/core';
import { TodoModel } from './todos.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosDataService {
  constructor() {}

  loadItems(): Observable<TodoModel[]> {
    return of([{ id: 'Todo1' }, { id: 'Todo2' }]);
  }

  addItem(item: TodoModel): Observable<void> {
    return of();
  }

  removeItem(item: TodoModel): Observable<void> {
    return of();
  }
}
