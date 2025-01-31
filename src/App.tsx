import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetTasks } from './store/tasks/restAPI.ts';
import Header from './components/Header/Header.tsx';
import TaskInputForm from './components/TaskInputForm/TaskInputForm.tsx';
import Filter from './components/Filter/Filter.tsx';
import TaskList from './components/TaskList/TaskList.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader.tsx";
import { selectLoading } from "./store/tasks/selectors.ts";

function App() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchGetTasks());
    }, [dispatch]);

    return (
        <Router>
            <div className="app">
                <Header />
                <TaskInputForm />
                <Filter  />
                { loading ? <Preloader /> :
                <Routes>
                    <Route path="/" element={<TaskList filter="all" />} />
                    <Route path="/active" element={<TaskList filter="active" />} />
                    <Route path="/done" element={<TaskList filter="done" />} />
                </Routes>
                }
            </div>
        </Router>
    );
}

export default App;
