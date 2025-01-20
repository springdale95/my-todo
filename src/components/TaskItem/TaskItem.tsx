import './TaskItem.css';
import TaskItemStatusButton from '../TaskItemStatusButton/TaskItemStatusButton.tsx';
import { ITask } from '../../types/types.ts';
import TaskItemDeleteButton from '../TaskItemDeleteButton/TaskItemDeleteButton.tsx';

interface ITaskItem {
    task: ITask;
    url: string;
    getAllTasks: () => Promise<void>;
}

enum TaskButtonsNames {
    Done = 'Выполнено',
    Delete = 'Удалить',
    CancelDone = 'Отменить выполнение',
}

const TaskItem = ({ task, url, getAllTasks }: ITaskItem) => {
    return (
        <li
            className={`task-item ${task.status ? 'done' : ''}`}
        >
            {task.text}
            <div>
                <TaskItemStatusButton
                    task={task}
                    taskButtonNames={[TaskButtonsNames.Done, TaskButtonsNames.CancelDone]}
                    url={url}
                    getAllTasks={getAllTasks}
                />
                <TaskItemDeleteButton
                    task={task}
                    taskButtonName={TaskButtonsNames.Delete}
                    url={url}
                    getAllTasks={getAllTasks}
                />
            </div>
        </li>
    );
};

export default TaskItem;
