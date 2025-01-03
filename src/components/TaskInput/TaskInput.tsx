import React from 'react';
import { v4 } from 'uuid';

interface ITasksInput {
    inputValue: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TaskInput = ({ inputValue, handleChange, handleKeyPress }: ITasksInput) => {
    return (
        <input
            id={v4()}
            type="text"
            placeholder="Введите задачу"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        />
    );
};

export default TaskInput;
