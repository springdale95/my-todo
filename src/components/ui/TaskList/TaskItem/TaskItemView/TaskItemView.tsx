import { TaskItemEditButton, TaskItemStatusButton, TaskItemDeleteButton } from '../../../../../components';
import { ITask } from '../../../../../store/tasks/tasksReducer';
import styles from './TaskItemView.module.scss'

enum TaskButtonsViewNames {
    Done = 'Выполнено',
    Delete = 'Удалить',
    CancelDone = 'Отменить выполнение',
    Edit = 'Редактировать',
}

export const TaskItemView = ({ task, handleEditToggle }: { task: ITask, handleEditToggle: () => void }) => {
    return (
        <>
            {task.text}
            <div className={styles.div}>
                <TaskItemEditButton taskButtonViewName={TaskButtonsViewNames.Edit} handleEditToggle={handleEditToggle} />
                <TaskItemStatusButton task={task} taskButtonViewNames={[TaskButtonsViewNames.Done, TaskButtonsViewNames.CancelDone]} />
                <TaskItemDeleteButton task={task} taskButtonViewName={TaskButtonsViewNames.Delete} />
            </div>
        </>
    );
};

