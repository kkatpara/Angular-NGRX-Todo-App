import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todo.model";

export const ADD_TODO_ACTION = '[todos page] add todo';
export const ADD_TODO_SUCCESS = '[todos page] add todo success';

export const UPDATE_TODO_ACTION = '[todos page] update todo';
export const UPDATE_TODO_SUCCESS = '[todos page] update todo success';

export const DELETE_TODO_ACTION = '[todos page] delete todo';
export const DELETE_TODO_SUCCESS = '[todos page] delete todo success';

export const LOAD_TODOS = '[todos page] load todos';
export const LOAD_TODOS_SUCCESS = '[todos page] load todos success';


export const addTodo = createAction(ADD_TODO_ACTION, props<{ todo: Todo }>());
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS, props<{ todo: Todo }>());

export const updateTodo = createAction(UPDATE_TODO_ACTION, props<{ todo: Todo }>());
export const updateTodoSuccess = createAction(UPDATE_TODO_SUCCESS, props<{ todo: Todo }>());

export const deleteTodo = createAction(DELETE_TODO_ACTION, props<{ id: string }>());
export const deleteTodoSuccess = createAction(DELETE_TODO_SUCCESS, props<{ id: string }>());

export const loadTodos = createAction(LOAD_TODOS);
export const loadTodosSuccess = createAction(LOAD_TODOS_SUCCESS, props<{ todos: Todo[] }>());