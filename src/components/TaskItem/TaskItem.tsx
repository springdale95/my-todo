import './TaskItem.css';
import { ITask } from '../../types/types.ts';
import { useState } from 'react';
import TaskItemEditForm from '../TaskItemEditForm/TaskItemEditForm.tsx';
import TaskItemView from '../TaskItemView/TaskItemView.tsx';

interface ITaskItem {
    task: ITask;
}

const TaskItem = ({ task }: ITaskItem) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <li className={`task-item ${task.status ? 'done' : ''}`}>
            {!isEditing ?
                <TaskItemView task={task} handleEditToggle={handleEditToggle} />
            :
            <TaskItemEditForm task={task} setIsEditing={setIsEditing} handleEditToggle={handleEditToggle} />
            }
        </li>
    );
};

export default TaskItem;
