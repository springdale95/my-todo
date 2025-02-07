import styles from './App.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store/store';
import { fetchGetTasks } from './store/tasks/thunks.ts';
import { resetTasks } from './store/tasks/tasksReducer.ts';
import { Header, TaskInputForm, Filter, Notification, Preloader, TaskList } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { selectLoading } from './store/tasks/selectors.ts';
import { selectShowNotification } from './store/notifications/selectors.ts';

function App() {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectLoading);
    const notification = useSelector(selectShowNotification);

    useEffect(() => {
        dispatch(fetchGetTasks());
        return () => {
            dispatch(resetTasks());
        };
    }, [dispatch]);

    return (
        <Router>
            <div className={styles.app}>
                {notification ? <Notification /> : null}
                <Header />
                <TaskInputForm />
                <Filter />
                {loading ? (
                    <Preloader />
                ) : (
                    <Routes>
                        <Route path="/" element={<TaskList />} />
                        <Route path="/active" element={<TaskList />} />
                        <Route path="/done" element={<TaskList />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
}

export default App;
