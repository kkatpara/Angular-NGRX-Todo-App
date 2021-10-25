import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Todo } from 'src/app/models/todo.model';
import { updateTodo } from 'src/app/store/actions/todo.action';
import { getTodoById } from 'src/app/store/selectors/todo.selector';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit, OnDestroy {

  todo!: Todo | any;
  todoForm!: FormGroup;
  todoSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params?.get('id'));
      this.todoSubscription = this.store
        .select(getTodoById(id))
        .subscribe((data) => {
          this.todo = data;
          this.createForm();
        });
    });
  }

  createForm() {
    this.todoForm = new FormGroup({
      title: new FormControl(this.todo.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.todo.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      return;
    }

    const title = this.todoForm.value.title;
    const description = this.todoForm.value.description;

    const todo: Todo = {
      id: this.todo.id,
      title,
      description,
    };

    this.store.dispatch(updateTodo({ todo }));
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    if (this.todoSubscription) {
      this.todoSubscription.unsubscribe();
    }
  }
}
