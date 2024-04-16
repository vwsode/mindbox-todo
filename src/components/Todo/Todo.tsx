import { FC, useEffect } from 'react';

import TodoFilters from '../TodoFilters/TodoFilters';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

import useTodo from '../../hooks/useTodo';

import styles from './Todo.module.scss';

const Todo: FC = () => {
    const { filterTodos } = useTodo();

    useEffect(() => {
        filterTodos('all');
    }, []);

    return (
        <div className={styles.app}>
            <h1 className={styles.title}>todos</h1>
            <div className={styles.wrapper}>
                <TodoForm />
                <TodoList />
                <TodoFilters />
            </div>
        </div>
    );
};

export default Todo;
