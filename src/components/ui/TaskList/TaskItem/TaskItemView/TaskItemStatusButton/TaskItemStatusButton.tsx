import { ITask } from '../../../../../../store/tasks/tasksReducer.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store';
import { fetchChangeTaskStatus } from '../../../../../../store/tasks/restAPI.ts';


interface ITaskItemStatusButton {
    task: ITask;
    taskButtonViewNames: string[];
}

export const TaskItemStatusButton = ({ task, taskButtonViewNames }: ITaskItemStatusButton) => {
    const dispatch = useDispatch<AppDispatch>();
    const changeTaskStatus =  () => {
        const updatedTask = {
            id: task.id,
            text: task.text,
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