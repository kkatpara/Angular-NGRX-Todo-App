import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodosState } from "../reducers/todo.reducer";

export const TODO_STATE_NAME = 'todos';

const getTodosState = createFeatureSelector<TodosState>(TODO_STATE_NAME);

export const getTodos = createSelector(getTodosState, (state) => {
    return state.todos;
})

export const getTodoById = (id: number | null) => {
    return createSelector(getTodosState, (state) => {
        return state.todos.find((todo) => todo.id === id);
    })
}