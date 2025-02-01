import { useState } from 'react';
import { TaskItemView, TaskItemEditForm } from '../../../../components';
import styles from './TaskItem.module.scss';

export const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <li className={`${styles.task_item} ${task.status ? styles.task_item__done : null}`}>
            {!isEditing ? (
                <TaskItemView task={task} handleEditToggle={handleEditToggle} />
            ) : (
                <TaskItemEditForm
                    task={task}
                    setIsEditing={setIsEditing}
                    handleEditToggle={handleEditToggle}
                />
            )}
        </li>
    );
};
