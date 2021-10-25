import { TodosState } from "./store/reducers/todo.reducer";
import { TODO_STATE_NAME } from "./store/selectors/todo.selector";

export interface AppState {
    [TODO_STATE_NAME]: TodosState;
}