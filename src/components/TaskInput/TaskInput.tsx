import React from 'react';

interface ITasksInput {
    inputValue: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TaskInput = ({ inputValue, handleChange, handleKeyPress }: ITasksInput) => {
    return (
        <input
            type="text"
            placeholder="Введите задачу"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        />
    );
};

export default TaskInput;
