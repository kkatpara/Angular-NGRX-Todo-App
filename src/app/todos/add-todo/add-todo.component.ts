import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from 'src/app/models/todo.model';
import { addTodo } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  showDescriptionErrors() {
    const descriptionForm = this.todoForm.get('description');
    if (descriptionForm!.touched && !descriptionForm!.valid) {
      if (descriptionForm!.errors!.required) {
        return 'Description is required';
      } else if (descriptionForm!.errors!.minlength) {
        return 'Description should be of minimum 10 characters length';
      } else { return; }
    } else {
      return;
    }
  }

  onAddTodo() {
    if (!this.todoForm.valid) {
      return;
    }
    const todo: Todo = {
      title: this.todoForm.value.title,
      description: this.todoForm.value.description
    };

    this.store.dispatch(addTodo({ todo }));
  }
}
