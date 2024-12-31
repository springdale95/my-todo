import {ITask} from "../../types/types.ts";

interface ITaskItemStatusButton {
    task: ITask;
    setStatus: (status: boolean) => void;
}

const TaskItemStatusButton = ({ task, setStatus }:ITaskItemStatusButton) => {

    const changeStatus = () => {
        setStatus(task.status = !task.status);
        console.log(task)
    }

    return (
        <button
            onClick={changeStatus}
        >
            {(task.status) ? "Отменить выполнение" : "Выполнено"}
        </button>
    );
};

export default TaskItemStatusButton;