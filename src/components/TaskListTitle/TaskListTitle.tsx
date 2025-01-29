import './TaskListTitle.css';
import { useSelector } from "react-redux";
import { selectGetTasks } from "../../store/tasks/selector.ts";

interface TaskListTitle {
    filter: string;
}

const TaskListTitle = ({ filter }: TaskListTitle) => {
    const { tasks } = useSelector(selectGetTasks);
    let activeCounter = 0;
    let doneCounter = 0;

    const counter = () => {
        tasks.forEach((task) => (task.status ? doneCounter++ : activeCounter++));
    };

    counter();

    function getTaskWord(count: number) {
        if (count % 10 === 1 && count % 100 !== 11) {
            return 'задача';
        } else if ([2, 3, 4].includes(count % 10) && !(count % 100 >= 12 && count % 100 <= 14)) {
            return 'задачи';
        } else {
            return 'задач';
        }
    }

    function getEndStatusWord(count: number) {
        return count % 10 === 1 && count % 100 !== 11 ? 'ая' : 'ых';
    }

    return (
        <h2 className={'task-list-title'}>
            {tasks.length === 0
                ? 'Задач пока нет'
                : `${
                      filter === 'all'
                          ? `У Вас ${activeCounter + doneCounter} ${getTaskWord(activeCounter + doneCounter)}`
                          : filter === 'active'
                            ? `У Вас ${activeCounter} активн${getEndStatusWord(activeCounter)} ${getTaskWord(activeCounter)}`
                            : `У Вас ${doneCounter} выполненн${getEndStatusWord(doneCounter)} ${getTaskWord(doneCounter)}`
                  }
            `}
        </h2>
    );
};

export default TaskListTitle;
