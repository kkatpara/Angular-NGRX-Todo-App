import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Todo } from 'src/app/models/todo.model';
import { deleteTodo, loadTodos } from 'src/app/store/actions/todo.action';
import { getTodos } from 'src/app/store/selectors/todo.selector';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todos: Observable<Todo> | any

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.todos = this.store.select(getTodos);
    this.store.dispatch(loadTodos())
  }

  onDeleteTodo(id: string) {
    if (confirm('Are you sure, you want to delete this todo ?')) {
      this.store.dispatch(deleteTodo({ id }));
    }
  }
}
