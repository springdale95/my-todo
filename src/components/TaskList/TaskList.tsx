import TaskItem from "../TaskItem/TaskItem.tsx";
import {ITask} from "../../types/types.ts";

interface ITaskList{
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
}

const TaskList = ({ tasks, setTasks }:ITaskList) => {

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            ))}
        </ul>
    );
};

export default TaskList;