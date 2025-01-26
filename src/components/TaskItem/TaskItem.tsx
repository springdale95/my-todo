import './TaskItem.css';
import { ITask } from '../../types/types.ts';
import { useState } from 'react';
import TaskItemEdit from '../TaskItemEdit/TaskItemEdit.tsx';
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
            <TaskItemEdit
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
