import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetTasks } from './store/tasks/restAPI.ts';
import Header from './components/Header/Header.tsx';
import TaskInputForm from './components/TaskInputForm/TaskInputForm.tsx';
import Filter from './components/Filter/Filter.tsx';
import TaskList from './components/TaskList/TaskList.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader.tsx";
import { selectLoading } from "./store/tasks/selectors.ts";
import { selectShowNotification } from './store/notifications/selectors.ts';
import Notification from './components/Notification/Notification.tsx';

function App() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const notification = useSelector(selectShowNotification);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        dispatch(fetchGetTasks());
    }, [dispatch]);

    return (
        <Router>
            <div className="app">
                { notification ? <Notification /> : null }
                <Header />
                <TaskInputForm />
                <Filter filter={filter} setFilter={setFilter} />
                { loading ? <Preloader /> :
                <Routes>
                    <Route path="/" element={<TaskList filter={filter} />} />
                    <Route path="/active" element={<TaskList filter={filter} />} />
                    <Route path="/done" element={<TaskList filter={filter} />} />
                </Routes>
                }
            </div>
        </Router>
    );
}

export default App;
