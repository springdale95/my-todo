import TaskItem from '../TaskItem/TaskItem.tsx';
import TaskListTitle from '../TaskListTitle/TaskListTitle.tsx';
import './TaskList.css';
import { useSelector } from "react-redux";
import { selectGetTasks } from "../../store/tasks/selectors.ts";

interface ITaskList {
    filter: string;
}

const TaskList = ({ filter }: ITaskList) => {
    const { tasks } = useSelector(selectGetTasks);

    const filteredTaskList = tasks.filter((task) =>
        filter === 'active' ? !task.status : filter === 'done' ? task.status : true,
    );

    return (
        <div className={'task-list'}>
            <TaskListTitle filter={filter}/>
            <ul>
                {filteredTaskList.map((task) => (
                    <TaskItem key={task.id} task={task}/>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
