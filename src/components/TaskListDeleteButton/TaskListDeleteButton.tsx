import { ITask } from '../../types/types.ts';

interface ITaskListDeleteButton {
    tasks: ITask[];
    taskListButtonName: string;
}

const TaskListDeleteButton = ({ tasks, taskListButtonName, url, getAllTasks }: ITaskListDeleteButton) => {
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
