import styles from '../../../App.module.scss';
import { useState } from 'react';
import { TaskInput, TaskAddButton } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTask } from '../../../store/tasks/thunks.ts';
import { selectGetTasks } from '../../../store/tasks/selectors.ts';
import { showAndHideNotification } from '../../../store/notifications/showAndHideNotification.ts';
import { allFilterReducer } from '../../../store/filter/filterReducer.ts';
import { AppDispatch } from '../../../store/store';
import { NotificationState } from '../../../store/notifications/notificationsReducer.ts';

export const TaskInputForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();
    const tasks = useSelector(selectGetTasks);

    const addTask = () => {
        if (inputValue.trim() === '') {
            const showNotificationAction: NotificationState = {
                show: true,
                notificationText: 'Введите Вашу задачу',
                type: 'panding',
            };
            const hideNotificationAction: NotificationState = {
                show: false,
                notificationText: '',
                type: 'panding',
            };
            return dispatch(
                showAndHideNotification(showNotificationAction, hideNotificationAction),
            );
        }

        if (tasks.find((item) => item.text === inputValue)) {
            setInputValue('');
            const showNotificationAction: NotificationState = {
                show: true,
                notificationText: 'Задача уже введена',
                type: 'error',
            };
            const hideNotificationAction: NotificationState = {
                show: false,
                notificationText: '',
                type: 'panding',
            };
            return dispatch(
                showAndHideNotification(showNotificationAction, hideNotificationAction),
            );
        }

        const newTask = {
            id: `${tasks.length + 1}`,
            text: inputValue.trim(),
            status: false,
        };

        dispatch(fetchAddTask(newTask));
        dispatch(allFilterReducer({ type: 'all' }));
        setInputValue('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <TaskInput inputValue={inputValue} handleChange={handleChange} />
            <TaskAddButton addTask={addTask} />
        </form>
    );
};
