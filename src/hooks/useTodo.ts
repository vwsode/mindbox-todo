import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, type RootState } from '../store/store';
import {
    addTodo as addTodoAction,
    removeTodo as removeTodoAction,
    toggleTodo as toggleTodoAction,
    clearCompleted as clearCompletedAction,
    filterTodos as filterTodosAction,
} from '../store/slices/todo.slice';
import { type Filter, type Todo } from '../interfaces/todo.interfaces';

const useTodo = () => {
    const { count, filteredTodos, currentFilter } = useSelector((state: RootState) => state.todo);
    const dispatch = useDispatch<AppDispatch>();

    const addTodo = (todo: Omit<Todo, 'isCompleted'>): void => {
        dispatch(addTodoAction(todo));
    };

    const removeTodo = (id: number): void => {
        dispatch(removeTodoAction(id));
    };

    const toggleTodo = (id: number | string): void => {
        dispatch(toggleTodoAction(id));
    };

    const clearCompleted = (): void => {
        dispatch(clearCompletedAction());
    };

    const filterTodos = (filterBy: Filter): void => {
        dispatch(filterTodosAction(filterBy));
    };

    return {
        todos: filteredTodos,
        addTodo,
        removeTodo,
        toggleTodo,
        clearCompleted,
        filterTodos,
        currentFilter,
        count,
    };
};

export default useTodo;
