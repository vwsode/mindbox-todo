import { FC } from 'react';

import Button from '../UI/Button/Button';

import useTodo from '../../hooks/useTodo';
import { type Filter } from '../../interfaces/todo.interfaces';

import styles from './TodoFilter.module.scss';

const filters: {
    title: string;
    filterBy: Filter;
}[] = [
    {
        title: 'All',
        filterBy: 'all',
    },
    {
        title: 'Active',
        filterBy: 'active',
    },
    {
        title: 'Completed',
        filterBy: 'completed',
    },
];

const TodoFilters: FC = () => {
    const { count, clearCompleted, filterTodos, currentFilter } = useTodo();

    return (
        <div className={styles.filter}>
            <span className={styles.count}>{count} items left</span>

            <div className={styles.controls}>
                {filters.map((filter) => (
                    <Button
                        key={filter.filterBy}
                        onClick={() => filterTodos(filter.filterBy)}
                        variant={filter.filterBy === currentFilter ? 'secondary' : 'transparent'}
                    >
                        {filter.title}
                    </Button>
                ))}
            </div>

            <Button variant="transparent" onClick={clearCompleted}>
                Clear сompleted
            </Button>
        </div>
    );
};

export default TodoFilters;
