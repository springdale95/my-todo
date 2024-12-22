import TaskItem from "../TaskItem/TaskItem.tsx";

const TaskList = ({ tasks }) => {

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;