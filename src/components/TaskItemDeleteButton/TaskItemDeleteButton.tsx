import { ITask } from '../../types/types.ts';
import axios from 'axios';

interface ITaskItemDeleteButton {
    task: ITask;
    taskButtonName: string;
}

const TaskItemDeleteButton = ({ task, taskButtonName, url, getAllTasks }: ITaskItemDeleteButton) => {
    // const deleteTask = () => {
    //     axios.delete(url + task.id)
    //         .then(response => {
    //             console.log('Задача удалена', response.data);
    //             getAllTasks();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //     // setTasks(tasks.filter((el) => el.id !== task.id));
    //     // tasks.splice(tasks.indexOf(task), 1);
    //     // console.log(tasks);
    // };

    return <button
        // onClick={deleteTask}
           >{taskButtonName}</button>;
};

export default TaskItemDeleteButton;
