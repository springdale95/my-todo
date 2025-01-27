import React from 'react';

interface ITasksInput {
    inputValue: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TaskInput = ({ inputValue, handleChange }: ITasksInput) => {
    return (
        <input type="text" placeholder="Введите задачу" value={inputValue} onChange={handleChange}/>
    );
};

export default TaskInput;
