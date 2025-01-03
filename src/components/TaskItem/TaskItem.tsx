import './TaskItem.css';
import TaskItemStatusButton from '../TaskItemStatusButton/TaskItemStatusButton.tsx';
import { ITask } from '../../types/types.ts';
import TaskItemDeleteButton from '../TaskItemDeleteButton/TaskItemDeleteButton.tsx';

interface ITaskItem {
    task: ITask;
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
}

enum TaskButtonsNames {
    Done = 'Выполнено',
    Delete = 'Удалить',
    CancelDone = 'Отменить выполнение'
}

const TaskItem = ({ task, tasks, setTasks }: ITaskItem) => {
    return (
        <li
            className={`task-item ${task.status ? 'done' : ''}`}
        >
            {task.text}
            <div>
                <TaskItemStatusButton
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                    taskButtonNames={[TaskButtonsNames.Done, TaskButtonsNames.CancelDone]}
                />
                <TaskItemDeleteButton
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                    taskButtonName={TaskButtonsNames.Delete}
                />
            </div>
        </li>
    );
};

export default TaskItem;
