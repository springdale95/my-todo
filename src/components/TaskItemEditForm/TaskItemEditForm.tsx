import TaskItemEditInput from '../TaskItemEditInput/TaskItemEditInput.tsx';
import TaskItemEditSaveButton from '../TaskItemEditSaveButton/TaskItemEditSaveButton.tsx';
import TaskItemEditCancelButton from '../TaskItemEditCancelButton/TaskItemEditCancelButton.tsx';
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchEditTask } from '../../store/tasks/restAPI.ts';
import { selectGetTasks } from "../../store/tasks/selectors.ts";
import { showAndHideNotification } from '../../store/notifications/thunk.ts';


enum TaskButtonsEditNames {
    Save = 'Сохранить',
    Cancel = 'Отмена',
}

const TaskItemEditForm = ({ task, setIsEditing, handleEditToggle  }) => {
    const [editedText, setEditedText] = useState(task.text);
    const dispatch = useDispatch();
    const { tasks } = useSelector(selectGetTasks);
    const editTask = () => {
        if (editedText.trim() === '') {
            const showNotificationAction = { show: true, notificationText: 'Введите Вашу задачу', type: 'error'};
            const hideNotificationAction = { show: false, notificationText: '', type: 'panding'};
            dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction))
            setIsEditing(true);
            setEditedText(task.text);
            return;
        }

        if (tasks.find((item) => item.text === editedText)) {
            const showNotificationAction = { show: true, notificationText: 'Задача уже введена', type: 'error'};
            const hideNotificationAction = { show: false, notificationText: '', type: 'panding'};
            dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction))
            setIsEditing(true);
            setEditedText(task.text);
            return;
        }

        const editedTask = {
            ...task,
            text: editedText.trim(),
        }

        dispatch(fetchEditTask(editedTask));
        setIsEditing(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(event.target.value)
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form className={'task-item'} onSubmit={handleSubmit} >
            <TaskItemEditInput editedText={editedText} handleChange={handleChange} />
            <div>
                <TaskItemEditSaveButton setIsEditing={setIsEditing} editTask={editTask} taskButtonEditName={TaskButtonsEditNames.Save} />
                <TaskItemEditCancelButton handleEditToggle={handleEditToggle} taskButtonEditName={TaskButtonsEditNames.Cancel} />
            </div>
        </form>
    );
};

export default TaskItemEditForm;