import { useState } from "react";
import "./TaskItem.css"
import TaskItemStatusButton from "../TaskItemStatusButton/TaskItemStatusButton.tsx";
import {ITask} from "../../types/types.ts";
import TaskItemDeleteButton from "../TaskItemDeleteButton/TaskItemDeleteButton.tsx";


interface ITaskItem {
    task: ITask;
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
}

const TaskItem = ({ task, tasks, setTasks }:ITaskItem) => {

    const [status, setStatus] = useState(task.status);

    return (

        <li
            className={`task-item ${(status) ? "done" : ""}`}
        >
            {task.text}
            <TaskItemStatusButton task={task} setStatus={setStatus} />
            <TaskItemDeleteButton task={task} tasks={tasks} setTasks={setTasks} />
        </li>
    );
};

export default TaskItem;