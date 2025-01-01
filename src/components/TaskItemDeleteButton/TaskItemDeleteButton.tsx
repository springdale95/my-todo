import { ITask } from '../../types/types.ts';

interface ITaskItemDeleteButton {
    task: ITask;
    tasks: ITask[];
    setTasks: (task: ITask[]) => void;
}

const TaskItemDeleteButton = ({ task, tasks, setTasks }: ITaskItemDeleteButton) => {
    const deleteTask = () => {
        setTasks(tasks.filter((el) => el.id !== task.id));
        tasks.splice(tasks.indexOf(task), 1);
        console.log(tasks);
    };

    return <button onClick={deleteTask}>Удалить</button>;
};

export default TaskItemDeleteButton;
