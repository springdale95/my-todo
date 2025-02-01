import styles from './TaskInput.module.scss'
import React from 'react';

interface ITasksInput {
    inputValue: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskInput = ({ inputValue, handleChange }: ITasksInput) => {
    return (
        <input className={styles.input} id="add" type="text" placeholder="Введите задачу" value={inputValue} onChange={handleChange} />
    );
};