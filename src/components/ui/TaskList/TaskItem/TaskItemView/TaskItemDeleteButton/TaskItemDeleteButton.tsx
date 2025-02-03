import { ITask } from '../../types/types.ts';
import { fetchDeleteTask } from '../../../../../../store/tasks/restAPI.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store.ts';

interface ITaskItemDeleteButton {
    task: ITask;
    taskButtonViewName: string;
}

export const TaskItemDeleteButton = ({ task, taskButtonViewName }: ITaskItemDeleteButton) => {
    const dispatch = useDispatch<AppDispatch>();

    const deleteTask = () => {
        dispatch(fetchDeleteTask(task));
    }

    return (
        <button onClick={deleteTask}>
            {taskButtonViewName}
        </button>
    );
};