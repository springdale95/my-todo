import { ITask } from '../../types/types.ts';
import axios from 'axios';

interface ITaskItemStatusButton {
    task: ITask;
    taskButtonNames: string[];
}

const TaskItemStatusButton = ({ task, taskButtonNames }: ITaskItemStatusButton) => {
    // const changeStatus = async () => {
    //     try {
    //         const updatedData = {status: !task.status};
    //         const response = await axios.put(url + task.id, updatedData);
    //         getAllTasks();
    //         console.log('Статус обновлен:', response.data);
    //     } catch (error) {
    //         console.error('Ошибка при обновлении статуса:', error);
    //     }
    // };

    return (
        <button
            // onClick={changeStatus}
        >
            {task.status ? taskButtonNames[1] : taskButtonNames[0]}
        </button>
    );
};

export default TaskItemStatusButton;
