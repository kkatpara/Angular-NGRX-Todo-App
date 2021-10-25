import { combineReducers } from "@ngrx/store";
import { todosReducer } from "./reducers/todo.reducer";

const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer;