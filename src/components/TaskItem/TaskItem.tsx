import './TaskItem.css';
import TaskItemStatusButton from '../TaskItemStatusButton/TaskItemStatusButton.tsx';
import { ITask } from '../../types/types.ts';
import TaskItemDeleteButton from '../TaskItemDeleteButton/TaskItemDeleteButton.tsx';

interface ITaskItem {
    task: ITask;
}

enum TaskButtonsNames {
    Done = 'Выполнено',
    Delete = 'Удалить',
    CancelDone = 'Отменить выполнение',
}

const TaskItem = ({ task }: ITaskItem) => {
    return (
        <li
            className={`task-item ${task.status ? 'done' : ''}`}
        >
            {task.text}
            <div>
                <TaskItemStatusButton
                    task={task}
                    taskButtonNames={[TaskButtonsNames.Done, TaskButtonsNames.CancelDone]}
                />
                <TaskItemDeleteButton
                    task={task}
                    taskButtonName={TaskButtonsNames.Delete}
                />
            </div>
        </li>
    );
};

export default TaskItem;
