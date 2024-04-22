import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosContainerComponent } from './todos-container/todos-container.component';

const routes: Routes = [
  {
    path: '',
    component: TodosContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
