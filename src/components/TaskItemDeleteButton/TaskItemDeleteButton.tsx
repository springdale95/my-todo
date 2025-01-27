import { ITask } from '../../types/types.ts';
import { fetchDeleteTask, fetchGetTasks } from '../../store/tasks/fetchTasksData.ts';
import { useDispatch } from 'react-redux';

interface ITaskItemDeleteButton {
    task: ITask;
    taskButtonName: string;
}

const TaskItemDeleteButton = ({ task, taskButtonViewName }: ITaskItemDeleteButton) => {
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch(fetchDeleteTask(task));
        dispatch(fetchGetTasks());
    }

    return (
        <button onClick={deleteTask}>
            {taskButtonViewName}
        </button>
    );
};

export default TaskItemDeleteButton;
