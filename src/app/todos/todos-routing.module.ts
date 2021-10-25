import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodosListComponent } from './todos-list/todos-list.component';

const routes: Routes = [
    {
        path: '',
        component: TodosListComponent,
        children: [
            { path: 'add', component: AddTodoComponent },
            { path: 'edit/:id', component: EditTodoComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodosRoutingModule { }
