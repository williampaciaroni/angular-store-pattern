import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosContainerComponent } from './todos-container/todos-container.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME } from './store/todos.model';
import { todoItemsReducer } from './store/todos.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/todos.effects';

@NgModule({
  declarations: [TodosContainerComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    StoreModule.forFeature(FEATURE_NAME, todoItemsReducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
})
export class TodosModule {}
