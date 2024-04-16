import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'secondary' | 'transparent';
    children: ReactNode;
}

const Button: FC<Props> = ({ variant, children, className, ...props }) => {
    return (
        <button className={`${styles.btn} ${styles[`btn-${variant}`]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
