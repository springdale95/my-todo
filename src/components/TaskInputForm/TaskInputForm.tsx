import React, { useState } from 'react';
import TaskInput from '../TaskInput/TaskInput.tsx';
import TaskAddButton from '../TaskAddButton/TaskAddButton.tsx';
import { ITask } from '../../types/types.ts';
import axios from 'axios';

interface ITaskInputForm {
    tasks: ITask[];
    setFilter: (filter: string) => void;
    url: string;
    getAllTasks: () => Promise<void>;
}

const TaskInputForm = ({ tasks, setFilter, url, getAllTasks }: ITaskInputForm) => {
    const [inputValue, setInputValue] = useState<string>('');

    const addTask = async () => {
        if (inputValue.trim() === '') {
            alert('Введите Вашу задачу');
            return;
        } else if (tasks.find((el) => el.text === inputValue)) {
            alert('Задача уже введена');
            setInputValue('');
            return;
        } else {
            const newTask = {
                text: inputValue.trim(),
                status: false,
            }
            axios.post(url, newTask)
                .then((response) => {
                    console.log('Задача создана', response.data);
                    getAllTasks();
                })
                .catch((err) => {
                    console.log(err);
                })

            setInputValue('');
        }
        setFilter('all');
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
