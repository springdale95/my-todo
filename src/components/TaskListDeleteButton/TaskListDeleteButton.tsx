interface ITaskListDeleteButton {
    setTasks: (tasks: []) => void,
    taskListButtonName: string,
}

const TaskListDeleteButton = ( {setTasks, taskListButtonName}:ITaskListDeleteButton ) => {

    const deleteAllTasks = () => {
        if (confirm('Вы действительно хотите удалить все задачи?')) setTasks([]);
    }

    return (
        <button
            onClick={deleteAllTasks}
        >
            {taskListButtonName}
        </button>
    );
};

export default TaskListDeleteButton;