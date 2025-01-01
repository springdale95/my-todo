import TaskItem from "../TaskItem/TaskItem.tsx";
import {ITask} from "../../types/types.ts";
import TaskListTitle from "../TaskListTitle/TaskListTitle.tsx";
import './TaskList.css'

interface ITaskList{
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
    filter: string
}

const TaskList = ({ tasks, setTasks, filter }:ITaskList) => {

    const filteredTaskList = tasks.filter((task) =>
        filter === "active" ? !task.status :
            filter === "done" ? task.status :
                true
    );

    return (
        <div
            className={"task-list"}
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
        </div>
    );
};

export default TaskList;