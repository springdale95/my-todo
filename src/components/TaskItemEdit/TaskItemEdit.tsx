import TaskItemEditInput from '../TaskItemEditInput/TaskItemEditInput.tsx';
import TaskItemEditSaveButton from '../TaskItemEditSaveButton/TaskItemEditSaveButton.tsx';
import TaskItemEditCancelButton from '../TaskItemEditCancelButton/TaskItemEditCancelButton.tsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEditTask, fetchGetTasks } from '../../store/tasks/fetchTasksData.ts';


enum TaskButtonsEditNames {
    Save = 'Сохранить',
    Cancel = 'Отмена',
}

const TaskItemEdit = ({ task, tasks, setIsEditing, handleEditToggle  }) => {
    const [editedText, setEditedText] = useState(task.text);
    const dispatch = useDispatch();

    const editTask = () => {

            if (editedText.trim() === '') {
                alert('Введите Вашу задачу');
                setEditedText(task.text);
                return;
            }
            if (tasks.find((item) => item.text === editedText)) {
                alert('Задача уже введена');
                setEditedText(task.text);
                return;
            } else {
                const editedTask = {
                    ...task,
                    text: editedText.trim(),
                }
                dispatch(fetchEditTask(editedTask));
                dispatch(fetchGetTasks());
            }
        setIsEditing(false);
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            editTask();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form
            className={'task-item'}
            onSubmit={handleSubmit}
        >
            <TaskItemEditInput
                editedText={editedText}
                handleChange={handleChange}
                handleKeyPress={handleKeyPress}
            />
            <div>
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

export default TaskItemEdit;