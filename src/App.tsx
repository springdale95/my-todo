import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { getTasks } from './store/tasks/selector.ts';
import { fetchGetTasks } from './store/tasks/fetchTasksData.ts';
import Header from './components/Header/Header.tsx';
import TaskInputForm from './components/TaskInputForm/TaskInputForm.tsx';
import Filter from './components/Filter/Filter.tsx';
import TaskList from './components/TaskList/TaskList.tsx';

function App() {
    const dispatch = useDispatch();
    const { tasks } = useSelector(getTasks); //??????
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        dispatch(fetchGetTasks());
    }, [dispatch]);

    
    return (
        <div
            className="app"
        >
            <Header />

            <TaskInputForm
                tasks={tasks}
                setFilter={setFilter}
            />

            <Filter
                filter={filter}
                setFilter={setFilter}
            />

            <TaskList
                tasks={tasks}
                filter={filter}
            />
        </div>
    );
}

export default App;
