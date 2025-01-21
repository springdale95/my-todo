import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header.tsx';
import TaskInputForm from './components/TaskInputForm/TaskInputForm.tsx';
import Filter from './components/Filter/Filter.tsx';
import TaskList from './components/TaskList/TaskList.tsx';
import { ITask } from './types/types.ts';

function App() {
    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [filter, setFilter] = useState<string>('all');
    const url = 'https://678bc1461a6b89b27a2b563b.mockapi.io/api/v1/tasks/';

    const getAllTasks = async () => {
        const fetchTasks = await fetch(url);
        return await fetchTasks.json().then((tasks) => setTasks(tasks));
    };

    useEffect(() => {
        getAllTasks();
    }, []);

    return (
        <div
            className="app"
        >
            <Header
                title={'my-todo'}
            />

            <TaskInputForm
                tasks={tasks}
                setFilter={setFilter}
                url={url}
                getAllTasks={getAllTasks}
            />

            <Filter
                filter={filter}
                setFilter={setFilter}
            />

            <TaskList
                tasks={tasks}
                filter={filter}
                url={url}
                getAllTasks={getAllTasks}
            />
        </div>
    );
}

export default App;
