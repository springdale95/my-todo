import './App.nodule.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetTasks } from './store/tasks/restAPI.ts';
import { Header, TaskInputForm, Filter, Notification, Preloader, TaskList } from './components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { selectLoading } from "./store/tasks/selectors.ts";
import { selectShowNotification } from './store/notifications/selectors.ts';

function App() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const notification = useSelector(selectShowNotification);

    useEffect(() => {
        dispatch(fetchGetTasks());
    }, [dispatch]);

    return (
        <Router>
            <div className="app">
                { notification ? <Notification /> : null }
                <Header />
                <TaskInputForm />
                <Filter />
                { loading ? <Preloader /> :
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/active" element={<TaskList />} />
                    <Route path="/done" element={<TaskList />} />
                </Routes>
                }
            </div>
        </Router>
    );
}

export default App;
