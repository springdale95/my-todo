import { ITask } from '../../../../../../store/tasks/tasksReducer.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store';
import { fetchChangeTaskStatus } from '../../../../../../store/tasks/thunks.ts';
import styles from '../../../../../../App.module.scss';

interface ITaskItemStatusButton {
    task: ITask;
    taskButtonViewNames: string[];
}

export const TaskItemStatusButton = ({ task, taskButtonViewNames }: ITaskItemStatusButton) => {
    const dispatch = useDispatch<AppDispatch>();
    const changeTaskStatus = () => {
        const updatedTask = {
            id: task.id,
            text: task.text,
            status: !task.status
        };

        dispatch(fetchChangeTaskStatus(updatedTask));
    };

    return (
        <button className={`${styles.btn_reset} ${styles.button}`} onClick={changeTaskStatus}>
            {task.status ? taskButtonViewNames[1] : taskButtonViewNames[0]}
        </button>
    );
};