import React, { useState } from 'react';
import TaskInput from '../TaskInput/TaskInput.tsx';
import TaskAddButton from '../TaskAddButton/TaskAddButton.tsx';
import { v4 } from 'uuid';
import { ITask } from '../../types/types.ts';

interface ITaskInputForm {
    tasks: ITask[];
    setTasks: (task: ITask[]) => void;
    setFilter: (filter: string) => void;
}


const TaskInputForm = ({ tasks, setTasks, setFilter }: ITaskInputForm) => {
    const [inputValue, setInputValue] = useState<string>('');

    const addTask = () => {
        if (inputValue.trim() === '') {
            alert('Введите Вашу задачу');
        } else if (tasks.find((el) => el.text === inputValue)) {
            alert('Задача уже введена');
            setInputValue('');
        } else {
            setTasks([...tasks,
                {
                    id: v4(),
                    text: inputValue.trim(),
                    status: false,
                },
            ]);
            setInputValue('');
        }
        setFilter('all')
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmit}
        >
            <TaskInput
                inputValue={inputValue}
                handleChange={handleChange}
                handleKeyPress={handleKeyPress}
            />
            <TaskAddButton
                addTask={addTask}
            />
        </form>
    );
};

export default TaskInputForm;
