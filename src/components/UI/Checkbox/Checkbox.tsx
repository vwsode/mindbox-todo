import { FC, InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: FC<Props> = ({ checked, ...props }) => {
    return (
        <span className={styles.checkbox}>
            <input className={styles.input} type="checkbox" {...props} />
            {checked && (
                <svg
                    className={styles.icon}
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.6 11.1L1.4 6.9L0 8.3L5.6 13.9L17.6 1.9L16.2 0.5L5.6 11.1Z"
                        fill="#2FAFAF"
                    />
                </svg>
            )}
        </span>
    );
};

export default Checkbox;
