import TaskItem from '../TaskItem/TaskItem.tsx';
import TaskListTitle from '../TaskListTitle/TaskListTitle.tsx';
import TaskListDeleteButton from '../TaskListDeleteButton/TaskListDeleteButton.tsx';
import TaskListDoneButton from '../TaskListDoneButton/TaskListDoneButton.tsx';
import { ITask } from '../../types/types.ts';
import './TaskList.css';

interface ITaskList {
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
    filter: string;
}

enum TaskListButtonsNames {
    DeleteAll = "Удалить все",
    DoneAll = "Выполнить все"
}

const TaskList = ({ tasks, setTasks, filter }: ITaskList) => {
    const filteredTaskList = tasks.filter((task) =>
        filter === 'active' ? !task.status :
            filter === 'done' ? task.status :
                true,
    );

    return (
        <div
            className={'task-list'}
        >
            <TaskListTitle
                tasks={tasks}
                filter={filter}
            />
            <ul>
                {filteredTaskList.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                ))}
            </ul>
            { tasks.length > 0 ?
            <div
                className={'task-list-buttons'}
            >
                <TaskListDoneButton
                    tasks={tasks}
                    setTasks={setTasks}
                    taskListButtonName={TaskListButtonsNames.DoneAll}
                />
                <TaskListDeleteButton
                    setTasks={setTasks}
                    taskListButtonName={TaskListButtonsNames.DeleteAll}
                />
            </div>
                : null
            }
        </div>
    );
};

export default TaskList;
