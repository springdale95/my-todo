import { ITask } from '../../types/types.ts';
import { useDispatch } from 'react-redux';
import { fetchChangeTaskStatus } from '../../../../../../store/tasks/restAPI.ts';

interface ITaskItemStatusButton {
    task: ITask;
    taskButtonViewNames: string[];
}

export const TaskItemStatusButton = ({ task, taskButtonViewNames }: ITaskItemStatusButton) => {
    const dispatch = useDispatch();
    const changeTaskStatus =  () => {
        const updatedTask = {
            id: task.id,
            status: !task.status
        };
        dispatch(fetchChangeTaskStatus(updatedTask));
    };

    return (
        <button onClick={changeTaskStatus}>
            {task.status ? taskButtonViewNames[1] : taskButtonViewNames[0]}
        </button>
    );
};