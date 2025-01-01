import './TaskItem.css';
import TaskItemStatusButton from '../TaskItemStatusButton/TaskItemStatusButton.tsx';
import { ITask } from '../../types/types.ts';
import TaskItemDeleteButton from '../TaskItemDeleteButton/TaskItemDeleteButton.tsx';

interface ITaskItem {
    task: ITask;
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
}

const TaskItem = ({ task, tasks, setTasks }: ITaskItem) => {
    return (
        <li className={`task-item ${task.status ? 'done' : ''}`}>
            {task.text}
            <div>
                <TaskItemStatusButton task={task} tasks={tasks} setTasks={setTasks} />
                <TaskItemDeleteButton task={task} tasks={tasks} setTasks={setTasks} />
            </div>
        </li>
    );
};

export default TaskItem;
