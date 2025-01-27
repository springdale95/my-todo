import React, { useState } from 'react';
import TaskInput from '../TaskInput/TaskInput.tsx';
import TaskAddButton from '../TaskAddButton/TaskAddButton.tsx';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAddTask, fetchGetTasks } from '../../store/tasks/fetchTasksData.ts';
import {getTasks} from "../../store/tasks/selector.ts";

interface ITaskInputForm {
    setFilter: (filter: string) => void;
}

const TaskInputForm = ({ setFilter }: ITaskInputForm) => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch();
    const { tasks } = useSelector(getTasks);

    const addTask = () => {
        if (inputValue.trim() === '') {
            alert('Введите Вашу задачу');
            return;
        }

        if (tasks.find((item) => item.text === inputValue)) {
            alert('Задача уже введена');
            setInputValue('');
            return;
        }

        const newTask = {
            text: inputValue.trim(),
            status: false
        }

        dispatch(fetchAddTask(newTask));
        dispatch(fetchGetTasks())
        setInputValue('');
        setFilter('all');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <TaskInput inputValue={inputValue} handleChange={handleChange} />
            <TaskAddButton addTask={addTask} />
        </form>
    );
};

export default TaskInputForm;
