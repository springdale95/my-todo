import {ITask} from "../../types/types.ts";

interface ITaskItemStatusButton {
    task: ITask;
    setStatus: (status: boolean) => void;
}

const TaskItemStatusButton = ({ task, setStatus }:ITaskItemStatusButton) => {

    const changeStatus = () => {
        setStatus(task.status = !task.status);
    }

    return (
        <button
            onClick={changeStatus}
        >
            Выполнено!
        </button>
    );
};

export default TaskItemStatusButton;