import { ITask } from '../../../../../../store/tasks/tasksReducer';
import { fetchDeleteTask } from '../../../../../../store/tasks/restAPI';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store';

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