import { TaskListTitle, TaskItem } from './../../../components';
import { useSelector } from "react-redux";
import { selectGetTasks } from "../../../store/tasks/selectors.ts";
import styles from './TaskList.module.scss'
import { selectFilter } from '../../../store/filter/selector.ts';

export const TaskList = () => {
    const tasks = useSelector(selectGetTasks);
    const filter = useSelector(selectFilter);


    const filteredTaskList = tasks.filter((task) =>
        filter.type === 'active' ? !task.status : filter.type === 'done' ? task.status : true,
    );

    return (
        <div className={styles.div}>
            <TaskListTitle />
            <ul>
                {filteredTaskList.map((task) => (
                    <TaskItem key={task.id} task={task}/>
                ))}
            </ul>
        </div>
    );
};

