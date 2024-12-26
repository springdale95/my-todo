import { useState } from "react";
import "./TaskItem.css"

const TaskItem = ({ task, tasks, setTasks }) => {

    const [, setStatus] = useState(task.status);


    const changeStatusButton = () => {
        setStatus(task.status = !task.status);
        console.log(tasks)

    }

    const deleteTaskButton = () => {
        setTasks(tasks.filter((el) => el.id !== task.id));
        tasks.splice(tasks.indexOf(task), 1);
        console.log(tasks)
    }

    return (

        <li
            className={`task-item ${(task.status === true) ? "done" : ""}`}
        >
            {task.text}
            <button
                onClick={changeStatusButton}
            >
                Done!
            </button>
            <button
                onClick={deleteTaskButton}
            >
                Delete
            </button>
        </li>
    );
};

export default TaskItem;