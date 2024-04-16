import { describe, it, expect } from 'vitest';
import todoReducer, {
    addTodo,
    toggleTodo,
    removeTodo,
    initialState,
    clearCompleted,
    filterTodos,
		State,
} from './todo.slice';
import { Todo } from '../../interfaces/todo.interfaces';

describe('todo slice', () => {
    const todos: Todo[] = [
        { title: 'Todo 1', id: '1', isCompleted: false },
        { title: 'Todo 2', id: '2', isCompleted: true },
        { title: 'Todo 3', id: '3', isCompleted: true },
    ];

    const baseState: State = {
        todos,
        filteredTodos: todos,
        count: 1,
        currentFilter: 'all',
    };

    it('should return default state when passed an empty action', () => {
        const result = todoReducer(undefined, { type: '' });
        expect(result).toEqual(initialState);
    });

    it('should add new todo item with "addTodo" action', () => {
        const newTodo = { title: 'New todo item', id: '4', isCompleted: false };
        const action = { type: addTodo.type, payload: newTodo };
        const result = todoReducer(baseState, action);
        expect(result.todos[result.todos.length - 1]).toEqual(newTodo);
    });

    it('should toggle todo completed status with "toggleTodo" action', () => {
        const action = { type: toggleTodo.type, payload: '1' };
        const result = todoReducer(baseState, action);
        expect(result.todos[0].isCompleted).toBe(true);
    });

    it('should remove todo with "removeTodo" action', () => {
        const action = { type: removeTodo.type, payload: '1' };
        const result = todoReducer(baseState, action);
        expect(result.todos).toEqual(todos.slice(1));
    });

    it('should clear completed todos with "clearCompleted" action', () => {
        const action = { type: clearCompleted.type };
        const result = todoReducer(baseState, action);
        expect(result.todos).toEqual([{ title: 'Todo 1', id: '1', isCompleted: false }]);
    });

    it('should filter todos by "active" with "filterTodos" action', () => {
        const action = { type: filterTodos.type, payload: 'active' };
        const result = todoReducer(baseState, action);
        expect(result.filteredTodos).toEqual([todos[0]]);
    });

    it('should filter todos by "all" with "filterTodos" action', () => {
        const action = { type: filterTodos.type, payload: 'all' };
        const result = todoReducer(baseState, action);
        expect(result.filteredTodos).toEqual(todos);
    });

    it('should filter todos by "completed" with "filterTodos" action', () => {
        const action = { type: filterTodos.type, payload: 'completed' };
        const result = todoReducer(baseState, action);
        expect(result.filteredTodos).toEqual(todos.slice(1));
    });
});
