import { FC, Fragment } from 'react';

import TodoItem from '../TodoItem/TodoItem';

import useTodo from '../../hooks/useTodo';

import styles from './TodoList.module.scss';

const TodoList: FC = () => {
    const { todos } = useTodo();
    return (
        <div>
            <hr className={styles.divider} />
            {todos.length ? (
                todos.map((todo) => (
                    <Fragment key={crypto.randomUUID()}>
                        <TodoItem title={todo.title} id={todo.id} isCompleted={todo.isCompleted} />
                        <hr className={styles.divider} />
                    </Fragment>
                ))
            ) : (
                <>
                    <span className={styles.message}>There's nothing yet</span>
                    <hr className={styles.divider} />
                </>
            )}
        </div>
    );
};

export default TodoList;
