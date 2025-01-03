import Header from './components/Header/Header.tsx';
import TaskInputForm from './components/TaskInputForm/TaskInputForm.tsx';
import Filter from './components/Filter/Filter.tsx';
import TaskList from './components/TaskList/TaskList.tsx';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage.ts';

function App() {
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    const [filter, setFilter] = useLocalStorage('filter', 'all');

    return (
        <div className="app">

            <Header title={'my-todo'} />

            <TaskInputForm tasks={tasks} setTasks={setTasks} />

            <Filter filter={filter} setFilter={setFilter} />

            <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />

        </div>
    );
}

export default App;
