import { FC } from 'react';
import cn from 'classnames';

import Checkbox from '../UI/Checkbox/Checkbox';

import useTodo from '../../hooks/useTodo';

import styles from './TodoItem.module.scss';

interface Props {
    isCompleted: boolean;
    title: string;
    id: number | string;
}

const TodoItem: FC<Props> = ({ title, isCompleted, id }) => {
    const { toggleTodo } = useTodo();

    const toggleHandler = () => {
        toggleTodo(id);
    };

    return (
        <div
            className={cn(styles.item, {
                [styles.completed]: isCompleted,
            })}
        >
            <Checkbox checked={isCompleted} id={`todo_${id}`} onChange={toggleHandler} />
            <label htmlFor={`todo_${id}`} className={styles.title}>
                {title}
            </label>
        </div>
    );
};

export default TodoItem;
