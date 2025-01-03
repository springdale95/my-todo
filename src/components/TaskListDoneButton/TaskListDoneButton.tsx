import { ITask } from '../../types/types.ts';

interface ITaskListDoneButton {
    tasks: ITask[],
    setTasks: (tasks: ITask[]) => void,
    taskListButtonName: string,
}

const TaskListDoneButton = ( {tasks, setTasks, taskListButtonName}: ITaskListDoneButton ) => {

    const allDone = () => {
        if (confirm('Вы действительно хотите выполнить все задачи?')) setTasks(
            tasks.map((task) =>
                !task.status ? {...task, status: !task.status} : task,
            )
        );
    }

    return (
        <button
            onClick={allDone}
        >
            {taskListButtonName}
        </button>
    );
};

export default TaskListDoneButton;