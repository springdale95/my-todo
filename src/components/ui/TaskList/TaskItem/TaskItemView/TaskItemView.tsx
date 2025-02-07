import {
    TaskItemEditButton,
    TaskItemStatusButton,
    TaskItemDeleteButton,
} from '../../../../../components';
import { ITask } from '../../../../../store/tasks/tasksReducer';
import styles from '../../../../../App.module.scss';

enum TaskButtonsViewNames {
    Done = 'Выполнено',
    Delete = 'Удалить',
    CancelDone = 'Отменить',
    Edit = 'Редактировать',
}

export const TaskItemView = ({
    task,
    handleEditToggle,
}: {
    task: ITask;
    handleEditToggle: () => void;
}) => {
    return (
        <>
            <span>{task.text}</span>
            <div className={styles.task_buttons}>
                <TaskItemEditButton
                    taskButtonViewName={TaskButtonsViewNames.Edit}
                    handleEditToggle={handleEditToggle}
                />
                <TaskItemStatusButton
                    task={task}
                    taskButtonViewNames={[
                        TaskButtonsViewNames.Done,
                        TaskButtonsViewNames.CancelDone,
                    ]}
                />
                <TaskItemDeleteButton
                    task={task}
                    taskButtonViewName={TaskButtonsViewNames.Delete}
                />
            </div>
        </>
    );
};
