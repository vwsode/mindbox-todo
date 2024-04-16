import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Filter, type Todo } from '../../interfaces/todo.interfaces';

export interface State {
    todos: Todo[];
    filteredTodos: Todo[];
    count: number;
    currentFilter: Filter;
}

export const initialState: State = {
    count: 1,
    todos: [
        { title: 'Тестовое задание', isCompleted: false, id: '1' },
        { title: 'Покрытое тестами', isCompleted: true, id: '2' },
        { title: 'Прекрасный код', isCompleted: true, id: '3' },
    ],
    filteredTodos: [],
    currentFilter: 'all',
};

const updateFilteredTodos = (state: State) => {
    switch (state.currentFilter) {
        case 'active':
            state.filteredTodos = state.todos.filter((todo) => !todo.isCompleted);
            break;
        case 'completed':
            state.filteredTodos = state.todos.filter((todo) => todo.isCompleted);
            break;
        default:
            state.filteredTodos = state.todos;
            break;
    }
};

const updateCount = (state: State) => {
    state.count = state.todos.reduce((acc, todo) => (acc += !todo.isCompleted ? 1 : 0), 0);
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Omit<Todo, 'isCompleted'>>) => {
            const newTodo: Todo = { ...action.payload, isCompleted: false };
            state.todos.push(newTodo);
            updateCount(state);
            updateFilteredTodos(state);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.todos.splice(index, 1);
                updateCount(state);
            }
        },
        toggleTodo: (state, action: PayloadAction<number | string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
                updateFilteredTodos(state);
                updateCount(state);
            }
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => !todo.isCompleted);
            updateCount(state);
            updateFilteredTodos(state);
        },
        filterTodos: (state, action: PayloadAction<Filter>) => {
            state.currentFilter = action.payload;
            updateFilteredTodos(state);
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, clearCompleted, filterTodos } = todoSlice.actions;
export default todoSlice.reducer;
