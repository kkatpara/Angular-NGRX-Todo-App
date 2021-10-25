import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { TodosService } from "../../services/todos.service";
import { addTodo, addTodoSuccess, deleteTodo, deleteTodoSuccess, loadTodos, loadTodosSuccess, updateTodo, updateTodoSuccess } from "../actions/todo.action";

@Injectable()
export class TodosEffects {
    constructor(private actions$: Actions, private todosService: TodosService) { }

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(loadTodos),
        mergeMap(() =>
            this.todosService.getTodos().pipe(
                map((todos) =>
                    loadTodosSuccess({ todos })
                )
            )
        )
    )
    );


    addTodo$ = createEffect(() => this.actions$.pipe(
        ofType(addTodo),
        mergeMap(action =>
            this.todosService.addTodo(action.todo).pipe(
                map((todo) => addTodoSuccess({ todo }))
            )
        )
    ))

    updateTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateTodo),
            switchMap((action) => {
                return this.todosService.updateTodo(action.todo).pipe(
                    map((data) => {
                        return updateTodoSuccess({ todo: action.todo });
                    })
                );
            })
        );
    });

    deleteTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteTodo),
            switchMap((action) => {
                return this.todosService.deleteTodo(Number(action.id)).pipe(
                    map((data) => {
                        return deleteTodoSuccess({ id: action.id });
                    })
                );
            })
        );
    });
}