import TaskItem from "../TaskItem/TaskItem.tsx";

const TaskList = ({ tasks, setTasks }) => {

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
            ))}
        </ul>
    );
};

export default TaskList;