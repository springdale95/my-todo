import { ITask } from '../../types/types.ts';
import { useDispatch } from 'react-redux';
import { fetchChangeTaskStatus, fetchGetTasks } from '../../store/tasks/fetchTasksData.ts';

interface ITaskItemStatusButton {
    task: ITask;
    taskButtonViewNames: string[];
}

const TaskItemStatusButton = ({ task, taskButtonViewNames }: ITaskItemStatusButton) => {
    const dispatch = useDispatch();
    const changeTaskStatus =  () => {
        const updatedTask = {
            id: task.id,
            status: !task.status
        };
        dispatch(fetchChangeTaskStatus(updatedTask));
        dispatch(fetchGetTasks());
    };

    return (
        <button onClick={changeTaskStatus}>
            {task.status ? taskButtonViewNames[1] : taskButtonViewNames[0]}
        </button>
    );
};

export default TaskItemStatusButton;
