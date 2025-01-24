import React, { useState } from 'react';
import TaskInput from '../TaskInput/TaskInput.tsx';
import TaskAddButton from '../TaskAddButton/TaskAddButton.tsx';
import { ITask } from '../../types/types.ts';
import { useDispatch } from 'react-redux';
import { fetchAddTask } from '../../store/tasks/fetchTasksData.ts';

interface ITaskInputForm {
    tasks: ITask[];
    setFilter: (filter: string) => void;
}

const TaskInputForm = ({ tasks, setFilter }: ITaskInputForm) => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch();

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
                status: false
            }

            dispatch(fetchAddTask(newTask));
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
