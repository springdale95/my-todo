import {
    TaskItemEditInput,
    TaskItemEditSaveButton,
    TaskItemEditCancelButton,
} from './../../../../../components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditTask } from '../../../../../store/tasks/thunks.ts';
import { selectGetTasks } from '../../../../../store/tasks/selectors.ts';
import { showAndHideNotification } from '../../../../../store/notifications/showAndHideNotification.ts';
import styles from '../../../../../App.module.scss';
import { AppDispatch } from '../../../../../store/store.ts';
import { NotificationState } from '../../../../../store/notifications/notificationsReducer.ts';
import { ITask } from '../../../../../store/tasks/tasksReducer.ts';

enum TaskButtonsEditNames {
    Save = 'Сохранить',
    Cancel = 'Отмена',
}

export const TaskItemEditForm = ({
    task,
    setIsEditing,
    handleEditToggle,
}: {
    task: ITask;
    setIsEditing: (isEditing: boolean) => void;
    handleEditToggle: () => void;
}) => {
    const [editedText, setEditedText] = useState(task.text);
    const dispatch = useDispatch<AppDispatch>();
    const tasks = useSelector(selectGetTasks);
    const editTask = () => {
        if (editedText.trim() === '') {
            const showNotificationAction: NotificationState = {
                show: true,
                notificationText: 'Введите Вашу задачу',
                type: 'error',
            };
            const hideNotificationAction: NotificationState = {
                show: false,
                notificationText: '',
                type: 'panding',
            };
            dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction));
            setIsEditing(true);
            setEditedText(task.text);
            return;
        }

        if (tasks.find((item) => item.text === editedText)) {
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
            dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction));
            setIsEditing(true);
            setEditedText(task.text);
            return;
        }

        const editedTask = {
            ...task,
            text: editedText.trim(),
        };

        dispatch(fetchEditTask(editedTask));
        setIsEditing(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        editTask();
    };

    return (
        <form className={styles.editForm} onSubmit={handleSubmit}>
            <TaskItemEditInput editedText={editedText} handleChange={handleChange} />
            <div className={styles.task_buttons}>
                <TaskItemEditSaveButton
                    setIsEditing={setIsEditing}
                    editTask={editTask}
                    taskButtonEditName={TaskButtonsEditNames.Save}
                />
                <TaskItemEditCancelButton
                    handleEditToggle={handleEditToggle}
                    taskButtonEditName={TaskButtonsEditNames.Cancel}
                />
            </div>
        </form>
    );
};
