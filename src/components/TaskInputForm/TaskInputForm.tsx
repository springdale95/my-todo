import React, { useState } from 'react';
import TaskInput from '../TaskInput/TaskInput.tsx';
import TaskAddButton from '../TaskAddButton/TaskAddButton.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTask } from '../../store/tasks/restAPI.ts';
import { selectGetTasks } from "../../store/tasks/selectors.ts";
import { showAndHideNotification } from './../../store/notifications/thunk.ts'

const TaskInputForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch();
    const { tasks } = useSelector(selectGetTasks);

    const addTask = () => {
        if (inputValue.trim() === '') {
            const showNotificationAction = { show: true, notificationText: 'Введите Вашу задачу', type: 'error'};
            const hideNotificationAction = { show: false, notificationText: '', type: 'panding'};
            return dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction))
        }
        
        if (tasks.find((item) => item.text === inputValue)) {
            setInputValue('');
            const showNotificationAction = { show: true, notificationText: 'Задача уже введена', type: 'error'};
            const hideNotificationAction = { show: false, notificationText: '', type: 'panding'};
            return dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction))
        }

        const newTask = {
            text: inputValue.trim(),
            status: false
        }

        dispatch(fetchAddTask(newTask));
        setInputValue('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} >
            <TaskInput inputValue={inputValue} handleChange={handleChange} />
            <TaskAddButton addTask={addTask} />
        </form>
    );
};

export default TaskInputForm;
