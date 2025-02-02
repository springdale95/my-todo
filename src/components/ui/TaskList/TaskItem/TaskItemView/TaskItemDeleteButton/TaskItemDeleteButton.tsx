import { ITask } from '../../types/types.ts';
import { fetchDeleteTask, fetchGetTasks } from '../../../../../../store/tasks/restAPI.ts';
import { useDispatch } from 'react-redux';

interface ITaskItemDeleteButton {
    task: ITask;
    taskButtonName: string;
}

export const TaskItemDeleteButton = ({ task, taskButtonViewName }: ITaskItemDeleteButton) => {
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch(fetchDeleteTask(task));
    }

    return (
        <button onClick={deleteTask}>
            {taskButtonViewName}
        </button>
    );
};