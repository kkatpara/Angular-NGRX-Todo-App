import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodosRoutingModule } from './todos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodosEffects } from '../store/effects/todo.effect';
import { TODO_STATE_NAME } from '../store/selectors/todo.selector';
import { todosReducer } from '../store/reducers/todo.reducer';


@NgModule({
  declarations: [
    TodosComponent,
    TodosListComponent,
    AddTodoComponent,
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TodosRoutingModule,
    StoreModule.forFeature(TODO_STATE_NAME, todosReducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule { }
