import { ITask } from '../../types/types.ts';

interface ITaskItemDeleteButton {
    task: ITask;
    tasks: ITask[];
    setTasks: (task: ITask[]) => void;
    taskButtonName: string
}

const TaskItemDeleteButton = ({ task, tasks, setTasks, taskButtonName }: ITaskItemDeleteButton) => {
    const deleteTask = () => {
        setTasks(tasks.filter((el) => el.id !== task.id));
        tasks.splice(tasks.indexOf(task), 1);
        console.log(tasks);
    };

    return (
        <button
            onClick={deleteTask}
        >
            {taskButtonName}
        </button>
    );
};

export default TaskItemDeleteButton;
