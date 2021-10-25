import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Todo } from "../models/todo.model";

@Injectable({
    providedIn: 'root'
})

export class TodosService {
    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${environment.api_url}/todos`)
            .pipe(
                map((data) => {
                    const todos: Todo[] = [];
                    for (const key in data) {
                        todos.push({ ...data[key] });
                    }
                    return todos;
                })
            )
    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(`${environment.api_url}/todos`, todo)
    }

    updateTodo(todo: Todo) {
        const todoData = {
            title: todo.title, description: todo.description
        };
        return this.http.put(`${environment.api_url}/todos/${todo.id}`, todoData)
    }

    deleteTodo(id: number) {
        return this.http.delete(
            `${environment.api_url}/todos/${id}`
        );
    }
}