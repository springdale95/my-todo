
interface ITaskListDeleteButton {
    taskListButtonName: string;
}

const TaskListDeleteButton = ({ taskListButtonName }: ITaskListDeleteButton) => {
    // const deleteAllTasks = async () => {
    //     if (confirm('Вы действительно хотите удалить все задачи?')){
    //         for (const task of tasks) {
    //                 try {
    //                     const response = await axios.delete(url + task.id);
    //                     console.log('Задача удалена:', response.data);
    //                 } catch (error) {
    //                     console.error('Ошибка при обновлении статуса:', error);
    //                 }
    //         }
    //         getAllTasks();
    //     }
    // };

    return <button >
        {taskListButtonName}
    </button>;
};

export default TaskListDeleteButton;
