import { Component } from '@angular/core';
import { TodosService } from '../store/todos.service';
import { TodoModel } from '../store/todos.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrl: './todos-container.component.scss',
})
export class TodosContainerComponent {
  todos = this.todosService.loadTodoItems();

  newTodoId: string = '';

  constructor(private todosService: TodosService) {}

  addTodo() {
    this.todosService.addItem({ id: this.newTodoId });
  }

  removeTodo(item: TodoModel) {
    this.todosService.removeItem(item);
  }
}
