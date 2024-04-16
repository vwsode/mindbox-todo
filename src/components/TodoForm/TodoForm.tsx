import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import useTodo from '../../hooks/useTodo';

import styles from './TodoForm.module.scss';

const TodoForm: FC = () => {
    const [title, setTitle] = useState<string>('');
    const { addTodo } = useTodo();

    const submitHandler = (evt: SyntheticEvent) => {
        evt.preventDefault();
        addTodo({
            title,
            id: uuid(),
        });
        setTitle('');
    };

    const titleChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setTitle(evt.target.value);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <svg
                className={styles.icon}
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_102_2)">
                    <path
                        d="M19.76 22.9067L32 35.12L44.24 22.9067L48 26.6667L32 42.6667L16 26.6667L19.76 22.9067Z"
                        fill="#D0D0D0"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_102_2">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <input
                className={styles.input}
                value={title}
                onChange={titleChangeHandler}
                type="text"
                placeholder="What needs to be done?"
            />
        </form>
    );
};

export default TodoForm;
