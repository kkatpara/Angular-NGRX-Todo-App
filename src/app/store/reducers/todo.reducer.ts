import { createReducer, on } from "@ngrx/store";
import { addTodoSuccess, deleteTodo, deleteTodoSuccess, loadTodosSuccess, updateTodo, updateTodoSuccess } from "../actions/todo.action";
import { Todo } from "../../models/todo.model";

export interface TodosState {
    todos: Todo[];
}

export const initialState: TodosState = {
    todos: [],
};

export const todosReducer = createReducer(
    initialState,
    on(addTodoSuccess, (state, action) => {
        let todo = { ...action.todo };

        return {
            ...state,
            todos: [...state.todos, todo]
        }
    }),
    on(updateTodoSuccess, (state, action) => {
        const updatedTodos = state.todos.map((todo) => {
            return action.todo.id === todo.id ? action.todo : todo;
        });

        return {
            ...state,
            todos: updatedTodos,
        };
    }),
    on(deleteTodoSuccess, (state, { id }) => {
        const updatedTodos = state.todos.filter((todo) => {
            return todo.id !== Number(id);
        });

        return {
            ...state,
            todos: updatedTodos,
        };
    }),
    on(loadTodosSuccess, (state, action) => {
        return {
            ...state,
            todos: action.todos
        }
    })
);