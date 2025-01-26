import './TaskItem.css';
import { ITask } from '../../types/types.ts';
import { useState } from 'react';
import TaskItemEditForm from '../TaskItemEdit/TaskItemEditForm.tsx';
import TaskItemView from '../TaskItemView/TaskItemView.tsx';

interface ITaskItem {
    task: ITask;
    tasks: ITask[]
}

const TaskItem = ({ task, tasks }: ITaskItem) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <li
            className={`task-item ${task.status ? 'done' : ''}`}
        >
            {!isEditing ?
                <TaskItemView
                    task={task}
                    handleEditToggle={handleEditToggle}
                />
            :
            <TaskItemEditForm
                task={task}
                tasks={tasks}
                setIsEditing={setIsEditing}
                handleEditToggle={handleEditToggle}
            />
            }
        </li>
    );
};

export default TaskItem;
