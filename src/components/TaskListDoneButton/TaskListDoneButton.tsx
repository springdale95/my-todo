
interface ITaskListDoneButton {

    taskListButtonName: string;
}

const TaskListDoneButton = ({ taskListButtonName }: ITaskListDoneButton) => {
    // const allDone = async () => {
    //     if (confirm('Вы действительно хотите выполнить все задачи?')) {
    //         for (const task of tasks) {
    //             if (!task.status) {
    //                 try {
    //                     const updatedData = { status: true };
    //                     const response = await axios.put(url + task.id, updatedData);
    //                     console.log('Статус обновлен:', response.data);
    //                 } catch (error) {
    //                     console.error('Ошибка при обновлении статуса:', error);
    //                 }
    //             }
    //         }
    //         getAllTasks();
    //
    //     }
    //
    // };

    return <button >{taskListButtonName}</button>;
};

export default TaskListDoneButton;
