import TaskItemEditButton from '../TaskItemEditButton/TaskItemEditButton.tsx';
import TaskItemStatusButton from '../TaskItemStatusButton/TaskItemStatusButton.tsx';
import TaskItemDeleteButton from '../TaskItemDeleteButton/TaskItemDeleteButton.tsx';

enum TaskButtonsViewNames {
    Done = 'Выполнено',
    Delete = 'Удалить',
    CancelDone = 'Отменить выполнение',
    Edit = 'Редактировать',
}

const TaskItemView = ({ task, handleEditToggle }) => {
    return (
        <>
            {task.text}
            <div>
                <TaskItemEditButton
                    task={task}
                    taskButtonViewName={TaskButtonsViewNames.Edit}
                    handleEditToggle={handleEditToggle}
                />
                <TaskItemStatusButton
                    task={task}
                    taskButtonViewNames={[TaskButtonsViewNames.Done, TaskButtonsViewNames.CancelDone]}
                />
                <TaskItemDeleteButton
                    task={task}
                    taskButtonViewName={TaskButtonsViewNames.Delete}
                />
            </div>
        </>
    );
};

export default TaskItemView;