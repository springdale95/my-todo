import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGetTasks } from './store/tasks/fetchTasksData.ts';
import Header from './components/Header/Header.tsx';
import TaskInputForm from './components/TaskInputForm/TaskInputForm.tsx';
import Filter from './components/Filter/Filter.tsx';
import TaskList from './components/TaskList/TaskList.tsx';

function App() {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        dispatch(fetchGetTasks());
    }, [dispatch]);

    return (
        <div className="app">
            <Header />
            <TaskInputForm setFilter={setFilter} />
            <Filter filter={filter} setFilter={setFilter} />
            <TaskList filter={filter} />
        </div>
    );
}

export default App;
