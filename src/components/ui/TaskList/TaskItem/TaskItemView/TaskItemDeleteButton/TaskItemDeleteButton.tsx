import { ITask } from '../../../../../../store/tasks/tasksReducer';
import { fetchDeleteTask } from '../../../../../../store/tasks/thunks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store';
import styles from '../../../../../../App.module.scss';


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
        <button className={`${styles.btn_reset} ${styles.button}`} onClick={deleteTask}>
            {taskButtonViewName}
        </button>
    );
};