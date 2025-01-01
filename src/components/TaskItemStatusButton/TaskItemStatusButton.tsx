import { ITask } from '../../types/types.ts';

interface ITaskItemStatusButton {
    task: ITask;
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
}

const TaskItemStatusButton = ({ task, tasks, setTasks }: ITaskItemStatusButton) => {
    const changeStatus = () => {
        setTasks(tasks.map((t) => (t.id === task.id ? { ...t, status: !t.status } : t)));
    };

    return (
        <button onClick={changeStatus}>{task.status ? 'Отменить выполнение' : 'Выполнено'}</button>
    );
};

export default TaskItemStatusButton;
