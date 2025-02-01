import styles from './TaskInputForm.module.scss'
import { useState } from 'react';
import { TaskInput, TaskAddButton } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTask } from '../../../store/tasks/restAPI.ts';
import { selectGetTasks } from "../../../store/tasks/selectors.ts";
import { showAndHideNotification } from '../../../store/notifications/thunk.ts'

export const TaskInputForm = () => {
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

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} >
            <TaskInput inputValue={inputValue} handleChange={handleChange} />
            <TaskAddButton addTask={addTask} />
        </form>
    );
};
