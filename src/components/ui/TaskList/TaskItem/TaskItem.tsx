import { useState } from 'react';
import { TaskItemView, TaskItemEditForm } from '../../../../components';
import styles from '../../../../App.module.scss';
import { ITask } from '../../../../store/tasks/tasksReducer.ts';

export const TaskItem = ({ task }: { task: ITask }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <li className={`${styles.task_item} ${task.status ? styles.task_item__done : null}`}>
            {!isEditing && <TaskItemView task={task} handleEditToggle={handleEditToggle} />}
            {isEditing && (
                <TaskItemEditForm
                    task={task}
                    setIsEditing={setIsEditing}
                    handleEditToggle={handleEditToggle}
                />
            )}
        </li>
    );
};
