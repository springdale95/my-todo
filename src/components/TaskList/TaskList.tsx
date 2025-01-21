import TaskItem from '../TaskItem/TaskItem.tsx';
import TaskListTitle from '../TaskListTitle/TaskListTitle.tsx';
import TaskListDeleteButton from '../TaskListDeleteButton/TaskListDeleteButton.tsx';
import TaskListDoneButton from '../TaskListDoneButton/TaskListDoneButton.tsx';
import { ITask } from '../../types/types.ts';
import './TaskList.css';

interface ITaskList {
    tasks: ITask[];
    filter: string;
    url: string;
    getAllTasks: () => Promise<void>;
}

enum TaskListButtonsNames {
    DeleteAll = 'Удалить все',
    DoneAll = 'Выполнить все',
}

const TaskList = ({ tasks, filter, url, getAllTasks }: ITaskList) => {
    const filteredTaskList = tasks.filter((task) =>
        filter === 'active' ? !task.status : filter === 'done' ? task.status : true,
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
                        url={url}
                        getAllTasks={getAllTasks}
                    />
                ))}
            </ul>
            {tasks.length > 0 ? (
                <div
                    className={'task-list-buttons'}
                >
                    <TaskListDoneButton
                        tasks={tasks}
                        taskListButtonName={TaskListButtonsNames.DoneAll}
                        url={url}
                        getAllTasks={getAllTasks}
                    />
                    <TaskListDeleteButton
                        tasks={tasks}
                        taskListButtonName={TaskListButtonsNames.DeleteAll}
                        url={url}
                        getAllTasks={getAllTasks}
                    />
                </div>
            )
                : null}
        </div>
    );
};

export default TaskList;
