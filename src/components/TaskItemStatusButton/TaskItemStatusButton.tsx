import { ITask } from '../../types/types.ts';

interface ITaskItemStatusButton {
    task: ITask,
    tasks: ITask[],
    setTasks: (tasks: ITask[]) => void,
    taskButtonNames: string[],
}

const TaskItemStatusButton = ({ task, tasks, setTasks, taskButtonNames }: ITaskItemStatusButton) => {
    const changeStatus = () => {
        setTasks(
            tasks.map((t) =>
                t.id === task.id ? { ...t, status: !t.status} : t,
            ),
        );
    };

    return (
        <button
            onClick={changeStatus}
        >
            {task.status ? taskButtonNames[1] : taskButtonNames[0] }
        </button>
    );
};

export default TaskItemStatusButton;
