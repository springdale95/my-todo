import TaskItem from "../TaskItem/TaskItem.tsx";
import {ITask} from "../../types/types.ts";
import EmptyList from "../EmptyList/EmptyList.tsx";

interface ITaskList{
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
    filter: string
}

const TaskList = ({ tasks, setTasks, filter }:ITaskList) => {

    const filteredTaskList = () => {
        if(filter === "active") return tasks.filter((el) => !el.status);
        if(filter === "done") return tasks.filter((el) => el.status);
        return tasks;
    }

    return (
        <div>
            <EmptyList tasks={tasks}/>
            <ul>
                {filteredTaskList().map((task) => (
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